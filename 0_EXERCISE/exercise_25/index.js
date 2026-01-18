// 配列の参照に関する演習問題
// 4つの名前が入っているleaderboardという配列を用意しています。この配列を直接編集することなく、以下を行ってください：
// 2つの目のLuaという名前は脱字がありました。本当はLunaにしたかったのです。配列の2つ目の要素をLunaに更新してください。（1行目を編集してはいけません）
// Bellatrixはleaderboardから除外されてDracoに替わりました。配列の最後の要素をBellatrixからDracoに更新してください（これも1行目は編集せずに更新してください）
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //この行は編集しないでください

// コードはこの下に書いてください
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";

console.log(leaderboard)
