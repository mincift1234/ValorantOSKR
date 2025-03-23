const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://fhqeqwzhmpduehxihonk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDc3MzUsImV4cCI6MjA1ODIyMzczNX0.tow94JIgEm70XjGrbSkejJk0A2xLTod_qOIYITB2efQ";
const supabase = createClient(SUPABASE_URL,  SUPABASE_ANON_KEY);

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
    // ✅ Supabase에서 JWT 검증 없이 유저 정보 가져오기
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return {
        statusCode: 400,
        body: "유효하지 않거나 만료된 토큰입니다.",
      };
    }

    // ✅ Supabase users 테이블에서 이메일 인증 상태 업데이트
    const { data, error: updateError } = await supabase
      .from("users")
      .update({ email_verified: true }) // `email_verified` 필드 업데이트 (필요한 경우 추가)
      .eq("email", user.email);

    if (updateError) {
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
