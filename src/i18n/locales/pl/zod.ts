const zodMessages = {
  errors: {
    invalid_type: "Oczekiwano: {{expected}}, otrzymano: {{received}}",
    invalid_type_received_undefined: "Wymagane",
    invalid_literal: "Niewłaściwa wartość literału, oczekiwano: {{expected}}",
    unrecognized_keys: "Nierozpoznany klucz(e) w obiekcie: {{- keys}}",
    invalid_union: "Niewłaściwa wartość",
    invalid_union_discriminator:
      "Niewłaściwa wartość dyskryminatora. Oczekiwano: {{- options}}",
    invalid_enum_value:
      "Niewłaściwa wartość wyliczeniowa. Oczekiwano: {{- options}}, otrzymano: '{{received}}'",
    invalid_arguments: "Niewłaściwe argumenty funkcji",
    invalid_return_type: "Niewłaściwy typ zwrotny funkcji",
    invalid_date: "Niewłaściwa data",
    custom: "Niewłaściwa wartość",
    invalid_intersection_types:
      "Wyniki skrzyżowania nie mogły zostać połączone",
    not_multiple_of: "Liczba musi być wielokrotnością {{multipleOf}}",
    not_finite: "Liczba musi być skończona",
    invalid_string: {
      email: "Niewłaściwy adres email",
      url: "Niewłaściwy URL",
      uuid: "Niewłaściwe UUID",
      cuid: "Niewłaściwe CUID",
      regex: "Niewłaściwa wartość",
      datetime: "Niewłaściwa data i czas",
      startsWith: 'Niewłaściwa wartość: musi zaczynać się na "{{startsWith}}"',
      endsWith: 'Niewłaściwa wartość: musi kończyć się na "{{endsWith}}"',
    },
    too_small: {
      array: {
        exact: "Tablica musi zawierać dokładnie {{minimum}} element(ów)",
        inclusive: "Tablica musi zawierać co najmniej {{minimum}} element(ów)",
        not_inclusive:
          "Tablica musi zawierać więcej niż {{minimum}} element(ów)",
      },
      string: {
        exact: "Ciąg znaków musi zawierać dokładnie {{minimum}} znak(ów)",
        inclusive: "Ciąg znaków musi zawierać co najmniej {{minimum}} znak(ów)",
        not_inclusive:
          "Ciąg znaków musi zawierać więcej niż {{minimum}} znak(ów)",
      },
      number: {
        exact: "Liczba musi wynosić dokładnie {{minimum}}",
        inclusive: "Liczba musi być większa lub równa {{minimum}}",
        not_inclusive: "Liczba musi być większa niż {{minimum}}",
      },
      set: {
        exact: "Niewłaściwa wartość",
        inclusive: "Niewłaściwa wartość",
        not_inclusive: "Niewłaściwa wartość",
      },
      date: {
        exact: "Data musi wynosić dokładnie {{- minimum, datetime}}",
        inclusive: "Data musi być większa lub równa {{- minimum, datetime}}",
        not_inclusive: "Data musi być większa niż {{- minimum, datetime}}",
      },
    },
    too_big: {
      array: {
        exact: "Tablica musi zawierać dokładnie {{maximum}} element(ów)",
        inclusive: "Tablica musi zawierać co najwyżej {{maximum}} element(ów)",
        not_inclusive:
          "Tablica musi zawierać mniej niż {{maximum}} element(ów)",
      },
      string: {
        exact: "Ciąg znaków musi zawierać dokładnie {{maximum}} znak(ów)",
        inclusive: "Ciąg znaków może zawierać co najwyżej {{maximum}} znak(ów)",
        not_inclusive:
          "Ciąg znaków musi zawierać maksymalnie {{maximum}} znak(ów)",
      },
      number: {
        exact: "Liczba musi wynosić dokładnie {{maximum}}",
        inclusive: "Liczba musi być mniejsza lub równa {{maximum}}",
        not_inclusive: "Liczba musi być mniejsza niż {{maximum}}",
      },
      set: {
        exact: "Niewłaściwa wartość",
        inclusive: "Niewłaściwa wartość",
        not_inclusive: "Niewłaściwa wartość",
      },
      date: {
        exact: "Data musi wynosić dokładnie {{- maximum, datetime}}",
        inclusive: "Data musi być mniejsza lub równa {{- maximum, datetime}}",
        not_inclusive: "Data musi być mniejsza niż {{- maximum, datetime}}",
      },
    },
  },
  validations: {
    email: "adres email",
    url: "URL",
    uuid: "UUID",
    cuid: "CUID",
    regex: "Regex",
    datetime: "data i czas",
  },
  types: {
    function: "funkcja",
    number: "liczba",
    string: "ciąg znaków",
    nan: "NaN",
    integer: "liczba całkowita",
    float: "liczba zmiennoprzecinkowa",
    boolean: "wartość boolowska",
    date: "data",
    bigint: "BigInt",
    undefined: "undefined",
    symbol: "symbol",
    null: "null",
    array: "tablica",
    object: "obiekt",
    unknown: "unknown",
    promise: "promise",
    void: "void",
    never: "never",
    map: "map",
    set: "set",
  },
};

export default zodMessages;
