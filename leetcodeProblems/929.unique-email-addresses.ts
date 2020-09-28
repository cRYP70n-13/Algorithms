const numUniqueEmails = (email: string[]): number => {
    const set: Set<string> = new Set();

    for (let i = 0; i < email.length; i++) {
        let [local, domaine] = email.split('@');
        local = local.split('+')[0].replace(/\./g, '');
        set.add(`${local}@${domaine}`);
    }

    return set.size;
}
