const marvel_heros = ["thor", 'Ironman', "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// merge array
// console.log(marvel_heros)

// concat arr

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// spread operator
// const allnewheros = [...marvel_heros, ...dc_heros]
// console.log(allnewheros); 

const newarr = [1,2,3, [4,5,6], 7 , [6,7,[4,5]]]
const real_another_arr = newarr.flat(Infinity )

console.log(real_another_arr);