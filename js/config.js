// Our Odyssey の設定。
// SUPABASE_URL と SUPABASE_ANON_KEY が空のあいだは「お試しモード」で動き、
// データはこの端末のブラウザにだけ保存されます。
export const CONFIG = {
  START_DATE: '2026-08-04',      // 付き合った日
  SUPABASE_URL: 'https://cyuupuqjsnkzqlvbdaqy.supabase.co',              // 例: https://xxxx.supabase.co
  SUPABASE_ANON_KEY: 'sb_publishable_X5w7Pu7b41kwvd1vA3k8_A_n6Dm10cn',         // Supabase の publishable key（公開して大丈夫な方）
  LOGIN_DOMAIN: 'waku68.github.io',  // ログイン名のうしろに付ける文字（名前 → 名前@これ）
  SITE_ID: 'their',                  // 同じドメインに別の組のサイトを置くときだけ、短い英字を入れる（端末の保存場所を分ける）。ここは空のまま
  VAPID_PUBLIC_KEY: '',          // 通知用の公開鍵（tools/vapid.html で作る）
};
