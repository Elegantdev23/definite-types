interface ShortId {
    /**
     * Returns non-sequential unique id.
     *
     * @example
     * users.insert({
     *   _id: shortid(),
     *   name: '...',
     *   email: '...'
     * });
     */
    (): string;

    /**
     * Returns non-sequential unique id.
     *
     * @example
     * users.insert({
     *   _id: shortid.generate(),
     *   name: '...',
     *   email: '...'
     * });
     */
    generate: () => string;

    /**
     * Change the characters used.
     * You must provide a string of all 64 unique characters. Order is not important.
     * The default characters provided were selected because they are url safe.
     *
     * @param {string} [newCharacters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"]
     *
     * @example
     * // use $ and @ instead of - and _
     * shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
     * // any 64 unicode characters work, but I wouldn't recommend this.
     * shortid.characters('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');
     */
    characters: (newCharacters: string) => string;

    /**
     * Check to see if an id is a valid shortid.
     * Note: This only means the id could have been generated by shortid, it doesn't guarantee it.
     *
     * @example
     * shortid.isValid('41XTDbE'); // true
     * shortid.isValid('i have spaces'); // false
     */
    isValid: (id: any) => boolean;

    /**
     * If you are running multiple server processes then you should make sure every one has a unique worker id.
     * Should be an integer between 0 and 16.
     * If you do not do this there is very little chance of two servers generating the same id,
     * but it is theoretically possible if both are generated in the exact same second
     * and are generating the same number of ids that second and a half-dozen random numbers are all exactly the same.
     *
     * @default process.env.NODE_UNIQUE_ID || 0
     *
     * @example
     * shortid.worker(1);
     */
    worker: (integer: number) => void;

    /**
     * Choose a unique value that will seed the random number generator
     * so users won't be able to figure out the pattern of the unique ids.
     * Call it just once in your application before using shortId
     * and always use the same value in your application.
     *
     * Most developers won't need to use this, it's mainly for testing ShortId.
     *
     * If you are worried about users somehow decrypting the id
     * then use it as a secret value for increased encryption.
     *
     * @example
     * shortid.seed(1000);
     */
    seed: (float: number) => void;
}

declare const shortid: ShortId;

export = shortid;