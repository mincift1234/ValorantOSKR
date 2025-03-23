const { createClient } = require("@supabase/supabase-js");

// ✅ 환경 변수에서 Supabase URL 및 키 가져오기
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

exports.handler = async (event) => {
  try {
    // ✅ URL 파라미터에서 토큰 가져오기
    const params = new URLSearchParams(event.queryStringParameters);
    const token = params.get("token");

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "토큰이 제공되지 않았습니다." }),
      };
    }

    // ✅ Supabase에서 JWT 검증 없이 유저 정보 가져오기
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data || !data.user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "유효하지 않거나 만료된 토큰입니다." }),
      };
    }

    const user = data.user;

    // ✅ Supabase users 테이블에서 이메일 인증 상태 업데이트
    const { error: updateError } = await supabase
      .from("users")
      .update({ email_verified: true })
      .eq("email", user.email);

    if (updateError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "이메일 인증 실패" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "이메일 인증 성공! 이제 로그인할 수 있습니다." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "서버 오류가 발생했습니다." }),
    };
  }
};
