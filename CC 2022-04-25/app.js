// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
    let letters = {'C': 'G', 'G': 'C','A': 'T', 'T': 'A'};
    let complementarySide = [];
    for (let i=0; i < dna.length; i++) {
        complementarySide[i] = letters[dna[i]];
    }
    return complementarySide.join('');
}