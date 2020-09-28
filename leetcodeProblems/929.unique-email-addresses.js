/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails => {
	let res = [];

	for (let i = 0; i < emails.length; i++) {
		let splitEmail = emails[i].split('@');
		let user = splitEmail[0].replace(/
		let fullName = `${user}@${splitEmail[1]}`;

		if (res.indexOf(fullName) === -1)
			res.push(fullName);
	}
	return res.length;
};
// @lc code=end

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));