const suspiciousKeywords = [
    "gift card", "urgent", "bank account", "password", "wire transfer", "click here",
    "congratulations", "lottery", "win", "free", "act now", "limited time",
    "verify", "payment failed"
];

export function isSpam(message){
    const lower = message.toLowerCase();
    return suspiciousKeywords.some(word=>lower.includes(word));
}