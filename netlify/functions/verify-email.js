const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://fhqeqwzhmpduehxihonk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDc3MzUsImV4cCI6MjA1ODIyMzczNX0.tow94JIgEm70XjGrbSkejJk0A2xLTod_qOIYITB2efQ";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SECRET_KEY = "J/4gNMtWjniVBKeF+pFiorINrdqPVJxB8rlmyq76qP8hzkl7V+BzIXSABCSO9NnfSocHTW+cdPgVMGvekKv3AQ==";

exports.handler = async (event) => {
  console.log("🔹 이벤트 객체:", event);

  // URL 파라미터에서 토큰 가져오기
  const params = new URLSearchParams(event.queryStringParameters);
  let token = params.get("token");

  console.log("🔹 받은 토큰:", token);

  if (!token) {
    return {
      statusCode: 400,
      body: "토큰이 제공되지 않았습니다.",
    };
  }

  try {
    // URL 인코딩 문제 해결 (Netlify에서 URL이 변형될 가능성)
    token = decodeURIComponent(token);
    console.log("🔹 디코딩된 토큰:", token);

    // JWT 검증
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("✅ 디코딩된 토큰 데이터:", decoded);

    const email = decoded.email;

    // Supabase에서 이메일 인증 상태 변경
    const { data, error } = await supabase
      .from("users")
      .update({ email_verified: true })
      .eq("email", email);

    if (error) {
      console.error("🔴 Supabase 업데이트 오류:", error);
      return {
        statusCode: 400,
        body: "이메일 인증 실패",
      };
    }

    return {
      statusCode: 200,
      body: "이메일 인증 성공! 이제 로그인할 수 있습니다.",
    };
  } catch (error) {
    console.error("🔴 JWT 검증 오류:", error);
    return {
      statusCode: 400,
      body: `유효하지 않거나 만료된 토큰입니다. 오류 메시지: ${error.message}`,
    };
  }
};
