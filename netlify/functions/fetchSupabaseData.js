// netlify/functions/fetchSupabaseData.js
const axios = require("axios");

exports.handler = async function(event, context) {
    const SUPABASE_URL = process.env.SUPABASE_URL; // 환경변수로 Supabase URL 받기
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY; // 환경변수로 Supabase API 키 받기

    try {
        // Supabase API로 데이터 요청
        const response = await axios.get(`${SUPABASE_URL}/rest/v1/your_table`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),  // 클라이언트로 데이터 반환
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching data' }),
        };
    }
};
