import { countOfAtoms } from './0726-countOfAtoms'

it.each(
  //  prettier-ignore
  [
    [
      "H2O",
      "H2O"
    ],
    [
      "Mg(OH)2",
      "H2MgO2"
    ],
    [
      "K4(ON(SO3)2)2",
      "K4N2O14S4"
    ],
    [
      "(NB3)33",
      "B99N33"
    ],
    [
      "((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14",
      "B18900Be18984C4200H5446He1386Li33894N50106O22638"
    ],
    [
      "Mg(H2O)N",
      "H2MgNO"
    ]
  ]
)('should work %#', (input, output) => {
  expect(countOfAtoms(input)).toBe(output)
})
