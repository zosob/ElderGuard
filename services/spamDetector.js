const suspiciousKeywords = [
    "gift card", "urgent", "bank account", "password", "wire transfer", "click here",
    "congratulations", "lottery", "win", "free", "act now", "limited time",
    "verify", "payment failed", "prince"
];

export function analyzeMessage(message){
    const lower = message.toLowerCase();
    let spamScore = 0;
    let reasons = [];

    //Rule 1: Keyword Match...
    suspiciousKeywords.forEach(word => {
        if (lower.includes(word)) {
            spamScore += 2;
            reasons.push(`Contains suspicious word: "${word}"`);
        }
    });

    //Rule 2: Too many emojis and special symbols...
    const specialChars = (lower.match(/[$@!%*?&#]/g) || []).length;
    if ( specialChars > 5) {
        spamScore+= 1;
        reasons.push("Too many special characters");
    }

    //Rule 3: Message is too short or too long...
    if (lower.length < 10 || lower.length > 300) {
        spamScore += 1;
        reasons.push("Unusual message length");
    }

    //Rule 4: All caps detection...
    if (message === message.toUpperCase() && message.length > 5) {
        spamScore += 1;
        reasons.push("Message is ALL CAPS");
    }
    const isSpam = spamScore >= 3;

    return {
        isSpam,
        reasons
    };
}