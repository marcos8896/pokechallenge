//It would be better to use an environment variable, but it is not practical in this example.
//So let's stick with a constants file.

export const BASE_URL = 'http://pokeapi.salestock.net/api/v2';

//Official PokeAPI at the time of writing does not offer a full functional pagination feature with
//limit and offset, so I decided to use a copy API that does offer the pagination feature.
//Issue link: https://github.com/PokeAPI/pokeapi/issues/372#issuecomment-435753308