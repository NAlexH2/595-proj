import getLetterList from "./SpeciesArrays";
import ACraftBuild from "./SpeciesArrays"
import '@testing-library/jest-dom'

test('checks that inputting A returns the ACraftBuild array', () => {
    expect(getLetterList('A')).toContain(ACraftBuild)
})
