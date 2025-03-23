const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://fhqeqwzhmpduehxihonk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDc3MzUsImV4cCI6MjA1ODIyMzczNX0.tow94JIgEm70XjGrbSkejJk0A2xLTod_qOIYITB2efQ";
const supabase = createClient(SUPABASE_URL,  SUPABASE_ANON_KEY);

const SECRET_KEY = "J/4gNMtWjniVBKeF+pFiorINrdqPVJxB8rlmyq76qP8hzkl7V+BzIXSABCSO9NnfSocHTW+cdPgVMGvekKv3AQ==";

exports.handler = async (event) => {
  const params = new URLSearchParams(event.queryStringParameters);
  const token = params.get("token");

  if (!token) {
    return {
      statusCode: 400,
      body: "토큰이 제공되지 않았습니다.",
    };
  }

  try {
    // JWT 검증
    const decoded = jwt.verify(token, SECRET_KEY);
    const email = decoded.email;

    // Supabase에서 이메일 인증 상태 변경
    const { data, error } = await supabase
      .from("users")
      .update({ email_verified: true })
      .eq("email", email);

    if (error) {
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
    return {
      statusCode: 400,
      body: "유효하지 않거나 만료된 토큰입니다.",
    };
  }
};
