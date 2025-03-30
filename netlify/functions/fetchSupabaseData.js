exports.handler = async function(event, context) {
  const { createClient } = require('@supabase/supabase-js');
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const userId = event.queryStringParameters.userId; // 클라이언트에서 userId 받기

  try {
    const { data, error } = await supabase
      .from('user_data')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Supabase Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }), // 상세 오류 반환
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data), // 클라이언트로 데이터 반환
    };
  } catch (err) {
    console.error('Unexpected Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An unexpected error occurred' }),
    };
  }
};
