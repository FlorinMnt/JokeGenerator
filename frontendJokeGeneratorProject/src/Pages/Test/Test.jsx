export const Test = () => {
    const input = [1,2,3,4,5];
    const input2 = [1, -4, 12, 0, -3, 29, -150];
    const input3 = [12, 46, 32, 64];
    const input4 = "George Raymond Richard Martin";
    const input5 = [
        {
          name: "John",
          age: 13,
        },
        {
          name: "Mark",
          age: 56,
        },
        {
          name: "Rachel",
          age: 45,
        },
        {
          name: "Nate",
          age: 67,
        },
        {
          name: "Jennifer",
          age: 65,
        },
      ];
      const input6 = "Every developer likes to mix kubernetes and javascript";
      const input7 = 6;
      const input8 = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "f", "g"],
      ];
      const students = [
        { name: "Alice", scores: [90, 85, 92] },
        { name: "Bob", scores: [75, 80, 85] },
        { name: "Charlie", scores: [90, 95, 85] },
        { name: "Jack", scores: [100, 100, 100] }
      ];
      const products = [
        { name: "Product 1", price: 20, category: "Electronics" },
        { name: "Product 2", price: 30, category: "Clothes" },
        { name: "Product 3", price: 40, category: "Electronics" },
        { name: "Product 4", price: 50, category: "Clothes" },
        { name: "Product 5", price: 60, category: "Clothes" },
        { name: "Product 6", price: 70, category: "Electronics" },
        { name: "Product 7", price: 80, category: "Clothes" },
        { name: "Product 8", price: 90, category: "Electronics" },
      ];

      const employees = [
        { name: "John", salary: 50000, department: "IT" },
        { name: "Jane", salary: 60000, department: "HR" },
        { name: "Bob", salary: 55000, department: "IT" },
        { name: "Sophie", salary: 75000, department: "HR" },
        { name: "Mike", salary: 65000, department: "IT" },
        { name: "Emily", salary: 80000, department: "HR" },
        { name: "David", salary: 70000, department: "IT" },
      ];

    return(
        
        <div className="text-gray-800">
            <h1>1. Square the value of every element in the array. Presume that you will only get numbers in the input array: {input}</h1>
            <p>Rezolvare:<br/>
                {
                    (() => {
                        
                        let newArray = input.map((item) => item * 2)
                            return newArray.join(" ");
                    })()
                }
            </p><br />
            <h1>2. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.</h1>
            <p>
                {
                    (() => {
                        let sum = 0;
                        let newArray = input2.map((item) =>{
                            item < 0 ? 0 : item;

                            if(item > 0){
                                sum += item
                            }
                        })
                        //return sum;
                        let array = input2.filter((item) => item > 0).reduce((acumulator,item) => acumulator + item);
                        return array;
                    })()
                }
            </p><br />
            <h1>3. Calculate the mean and median values of the number elements from the input array.</h1>
            <p>
                {
                    (() => {
                        let half = input3.length / 2;
                        let mean = input3.reduce((acumulator,item) => acumulator + item, 0) / input3.length;
                        let median = (input3[half] + input3[half - 1]) / 2
                        //trebuia sortat si nu mai foloseam -1
                        let arrayCopy = input3.slice().sort()//slice are 2 parametri (start , end)
                        return `Median: ${median} Mean: ${mean}`;
                        
                    })()
                }
            </p><br />
            <h1>3. The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.</h1>
            <p>
                {

                   (() => {
                        //"George Raymond Richard Martin"
                        let word = "";
                        let word_array = [];
                        let word_string = input4.split(" ").map(item => item[0]).join(" ");
                        //console.log("Word_string:",word_string);
                        return `Rezultatul este: ${word_string}`;


                        // for(let item of string){

                        //     if(item !== " "){
                        //         word += item;
                        //     }
                        //     else{
                        //         if(word.length > 0){
                        //             word_array.push(word);
                        //             word = "";
                        //         }
                        //     }

                        //     if (word.length > 0) {
                        //         word_array.push(word);
                        //     }
                        // }
                        // console.log("Word: ",word_array);
                        // return word_array;
                   })()

                       
                }
            </p><br />
            <h1>4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.</h1>
            <p>
                {
                    (() => {
                        let obj = [];

                        for(let item of input5){
                            obj.push(item.age);
                        }
                        let min = Math.min(...obj);
                        let max = Math.max(...obj);
                        let diference = max - min;
                        //console.log(min,max);
                        return `Min: ${min} Difference: ${diference} Max: ${max}`;
                    })()
                }
            </p><br />
            <h1>5. Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e</h1>
            <p>
                {
                    (() => {
                        //"Every developer likes to mix kubernetes and javascript"
                        let final_array = [];
                        let first,last;
                        let difference;
                        let middle;
                        let abreviat;
                        let new_array = input6.split(" ");

                        for(let item of new_array){
                            //console.log(item);
                            if(item.length > 4){
                                //final_array.push(item);
                                first = item[0];
                                last = item[item.length - 1];
                                middle = item.length - 2;
                                abreviat = `${first}${middle}${last}`;
                                final_array.push(abreviat);
                            }else{
                                final_array.push(item);
                            }
                        }
                        let result = final_array.join(" ");
                        //console.log(final_array);
                        return "Reszolvare: " + result;
                    })()
                }
            </p><br />
            <h1>6. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.</h1>
            <p>
                {
                    (() => {
                        let number = 1;
                        for(let i = 1; i <= input7; i++){
                            
                            number *= i;
                        }
                        //console.log(number);
                        let n = input7;
                        //Array.form creaza un array de la 1 la un numar n
                        let new_number = Array.from({length: n},(_,i) => i + 1).reduce((acumulator, element) =>  acumulator * element, 1);
                        //console.log(new_number);
                        return "Rezolvare: " + number;
                    })()
                }
            </p><br />
            <h1>7. Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.</h1>
            <p>
                {
                    (() =>{

                        let flatArr = input8.flat(Infinity);//transforma nested arrays intr un array
                        let obj = flatArr.reduce((acc,elem) =>{

                            if(acc[elem]){
                                acc[elem] += 1;
                            }else{
                                acc[elem] = 1;
                            }   
                            return acc;
                        },{});
                        //console.log(flatArr);
                        return "Rezultatul: " + JSON.stringify(obj);
                    })()
                }
            </p><br />
            <h1>8. You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.</h1>
            <p>
                {
                    (() => {

                        let score_item = students.map((item) =>{
                            let total_sum = item.scores.reduce((acc,elem) =>{
                                return acc + elem;
                            },0);
                            let media = total_sum / item.scores.length;

                            if(media > 90){
                                return {
                                    name : item.name,
                                    media: media
                                }
                            }
                            //return null;//map returneaza udefined pt celelalte elemnte
                        }).filter(item => item !== undefined);// daca ramane return null in map atunci folsim null in filter 
                        return JSON.stringify(score_item);
                    })()
                }
            </p><br />
            <h1>9. You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.</h1>
            <p>
                {
                    (() => {
                        let arr_electronic = [];
                        let arr_clothes = [];

                        products.forEach((product) => {

                                if(product.category === "Electronics"){
                                    arr_electronic.push(product.price);
                                }
                                else{
                                    arr_clothes.push(product.price);
                                }

                            //console.log("Electronice: ",arr_electronic);
                            //console.log("Haine: ",arr_clothes);
                        });

                        let final_electronic = arr_electronic.reduce((acc,elem) => {
                            return (acc + elem);
                        }, 0) / arr_electronic.length
                        let final_clothes = arr_clothes.reduce((acc,elem) => {
                            return (acc + elem);
                        }, 0) / arr_clothes.length
                        //return "Categoria electronice " + final_electronic + " si Categoria de haine " + final_clothes;
                        return "Rezolvare: " + JSON.stringify( [
                            
                            {category: 'Clothes', average: final_clothes},
                            {category: 'Electronics', average: final_electronic}
                        ])

                    })()
                }
            </p><br />
            <h1>10. You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.</h1>
            <p>
                {

                    (() => {
                        let it_arr = [];
                        let hr_arr = [];

                        employees.map((elem) => {

                            //let keys = Object.keys(elem);
                            let salary = elem.salary;

                            if(elem.department === "IT"){

                                it_arr.push(salary);

                            }else if(elem.department === "HR"){

                                hr_arr.push(salary);
                            }
                        });
                        
                        let average_it = it_arr.reduce((acc,elem) => {
                           return acc + elem;
                        },0) / it_arr.length;

                        let average_hr = hr_arr.reduce((acc, elem) => {
                            return acc + elem;
                        }, 0) / hr_arr.length;

                        let obj_arr = 
                        [
                        {department: 'HR', average: Math.floor(average_hr)},
                        {department: 'IT', average: Math.floor(average_it)}
                        ]

                        let final = obj_arr.map((elem) => {

                            if(elem.average > 65000){
                                return JSON.stringify(elem);
                            }
                        })
                        return "Rezolvare " + final;
                        //console.log(avarage_HR,avarage_IT);
                        //console.log(Math.floor(average_hr), Math.floor(average_it));
                    })()

                }
            </p><br />
            <h1>11. Folosește reduce pentru a calcula suma totală a prețurilor produselor din coș.</h1>
            <p>
                {
                    (() => {
                        const cart = [
                            { name: "Laptop", price: 1500, quantity: 1 },
                            { name: "Mouse", price: 50, quantity: 2 },
                            { name: "Keyboard", price: 100, quantity: 1 },
                        ];
                        let new_array = cart.reduce((acc,elem) =>{
                            return acc + elem.price;
                           }, 0)
                           return "Rezolvare " + new_array;
                    })()
                }
            </p><br />
            <h1>11. Folosește map pentru a crea un nou array care conține doar numele persoanelor.</h1>
            <p>
                {
                    (() => {
                         const people = [
                            { name: "John", age: 30 },
                            { name: "Jane", age: 25 },
                            { name: "Mary", age: 28 },
                        ];
                        let new_array = people.map(person => {
                            return person.name;
                          })
                          return "Rezolvare " + new_array;
                    })()
                }
            </p><br />
            <h1>12. Folosește filter pentru a găsi toate mașinile care au fost fabricate după anul 2010.</h1>
            <p>
                {
                    (() => {
                        const cars = [
                            { brand: "Toyota", year: 2005 },
                            { brand: "Honda", year: 2010 },
                            { brand: "Ford", year: 2018 },
                        ];
                        
                        let new_car = cars.filter((car) => {
                            if(car.year > 2010){
                                return car.year;
                            }
                        })
                        return "Rezolvare " + JSON.stringify(new_car);
                    })()
                }
            </p>
            <h1>13. Folosește find pentru a găsi utilizatorul cu username "jane_doe".</h1>
            <p>
                {
                    (() => {
                        const users = [
                            { username: "john_doe", email: "john@example.com" },
                            { username: "jane_doe", email: "jane@example.com" },
                            { username: "mary_smith", email: "mary@example.com" },
                        ];
                        let user = users.find((usr) => usr.username === "jane_doe")
                        return JSON.stringify(user ? user.username : null);
                    })()
                }
            </p><br />
            <h1>14.  Folosește reduce pentru a concatena toate numele produselor într-un singur string, separate prin virgule (ex: "Laptop, Mouse, Keyboard").</h1>
            <p>
                {
                    (() => {

                        const products = [
                            { name: "Laptop" },
                            { name: "Mouse" },
                            { name: "Keyboard" },
                        ];

                        let string = products.reduce((acc, elem,index) => {
                            //console.log(elem.name);
                            acc.push(elem.name);
                            return acc;
                            //return acc + (index > 0 ? ', ': '') + elem.name;
                            //console.log(acc);
                        }, []).join(', ');
                        
                        return string;
                    })()
                }
            </p>
            <h1>15. Folosește reduce pentru a calcula media notelor studenților.</h1>
            <p>
                {
                    (() => {
                        const students = [
                            { name: "John", grade: 7 },
                            { name: "Jane", grade: 8.5 },
                            { name: "Mary", grade: 9 },
                        ];
                        //let grade_array = students.map((item) => item.grade);
                        //console.log(grade_array);

                        let media = students.reduce((acc,elem) => {
                            return acc += elem.grade;
                        }, 0)
                        let total = media / students.length;
                        //console.log(total);
                        //console.log(Math.floor(media / grade_array.length));
                        //return "Rezultata " + Math.floor(media / grade_array.length);
                        return "Rezultatul: " + Math.floor(total);
                    })()
                }
            </p><br />
            <h1>16.  Folosește reduce sau filter împreună cu map pentru a obține un array cu categoriile unice (ex: ["Electronics", "Clothing"]).</h1>
            <p>
                {
                    (() => {
                        const items = [
                            { name: "Laptop", category: "Electronics" },
                            { name: "Shirt", category: "Clothing" },
                            { name: "Mouse", category: "Electronics" },
                        ];
                        let categoryArray = items.reduce((acc, elem) => {
                            acc.push(elem.category);
                            return acc;
                        }, []);
                        // let unique_category = categoryArray.filter((item, index) => {
                            //return categoryArray.indexOf(index) === index;
                        // });
                        let unique_category = [...new Set(categoryArray)];//elimina duplicatele
                        //console.log(unique_category);
                        //console.log(categoryArray);
                        //return categoryArray;
                        return "Rezolvarea: " + JSON.stringify(unique_category);
                    })()
                }
            </p>
            <h1>17. Folosește reduce pentru a grupa angajații după departament. Rezultatul ar trebui să fie un obiect în care cheile sunt numele departamentelor, iar valorile sunt array-uri cu angajații din acel departament.</h1>
            <p>
                {
                    (() => {
                        const employees = [
                            { name: "John", department: "HR" },
                            { name: "Jane", department: "Engineering" },
                            { name: "Mary", department: "HR" },
                        ];

                        const new_obj = employees.reduce((acc,elem) => {
                            let department = elem.department;
                            if(!acc[department]){
                                acc[department] = [];
                            }
                            acc[department].push(elem.name)
                            return acc;
                        }, {});

                        //console.log(new_obj);
                        return "Rezolvare: " + JSON.stringify(new_obj);
                    })()
                }
            </p><br />
            <h1>18. Folosește reduce pentru a găsi produsul cu cel mai mare preț.</h1>          
            <p>
                {
                    (() => {
                        const products = [
                            { name: "Laptop", price: 1500 },
                            { name: "Mouse", price: 50 },
                            { name: "Keyboard", price: 100 },
                        ];

                        let max = 0;

                        // let max_price = products.reduce((acc, elem) => {

                        //     if(elem.price > max){
                        //         max = elem.price;
                        //         acc = max;
                        //     }
                        //     return acc;
                        // }, 0);
                        // Alta metoda
                        let max_price = products.reduce((acc, elem) => {

                            if(elem.price > acc.price){

                                acc = elem;
                            }
                            return acc;

                        }, products[0]);
                        return JSON.stringify(max_price)// doar pentru pret: max_price.price;
                    })()
                }
            </p><br />
            <h1>19. Folosește map și find pentru a combina cele două array-uri astfel încât să obții un nou array de obiecte care să conțină username și roleName pentru fiecare utilizator.</h1>
            <p>
                {
                    (() => {
                        const users = [
                            { userId: 1, username: "john_doe" },
                            { userId: 2, username: "jane_doe" },
                        ];
                          
                        const roles = [
                            { userId: 1, roleName: "Admin" },
                            { userId: 2, roleName: "User" },
                        ];


                    })()
                }
            </p>
            
        </div>
    )
}