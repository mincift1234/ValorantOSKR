const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://fhqeqwzhmpduehxihonk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SECRET_KEY = "53KySPixjsXwC5VUbgT7G47RyhCxd+wxGfBKMXyTyGXpjv99eo2r7oQlihpL8Y2j0ksIdDL4K4L7iunKBNxl2A==";

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

try {
  const decoded = jwt.decode(token);
  console.log("🔹 JWT Payload:", decoded);

  if (!decoded) {
    return {
      statusCode: 400,
      body: "유효하지 않은 토큰입니다. (디코딩 실패)",
    };
  }

  const verified = jwt.verify(token, SECRET_KEY);
  console.log("🔹 Verified Token:", verified);
} catch (error) {
  console.log("🔴 JWT 오류:", error.message);
  return {
    statusCode: 400,
    body: `유효하지 않거나 만료된 토큰입니다. 오류: ${error.message}`,
  };
}

