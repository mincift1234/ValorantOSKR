const express = require("express");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 5000;

// Supabase 설정
const SUPABASE_URL = "https://fhqeqwzhmpduehxihonk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDc3MzUsImV4cCI6MjA1ODIyMzczNX0.tow94JIgEm70XjGrbSkejJk0A2xLTod_qOIYITB2efQ";
const supabase = createClient(SUPABASE_URL,  SUPABASE_ANON_KEY);

// JWT 서명 키
const SECRET_KEY = "J/4gNMtWjniVBKeF+pFiorINrdqPVJxB8rlmyq76qP8hzkl7V+BzIXSABCSO9NnfSocHTW+cdPgVMGvekKv3AQ==";

app.get("/verify-email", async (req, res) => {
  const { token } = req.query;

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
      return res.status(400).send("이메일 인증 실패");
    }

    res.send("이메일 인증 성공! 이제 로그인할 수 있습니다.");
  } catch (error) {
    res.status(400).send("유효하지 않거나 만료된 토큰입니다.");
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});