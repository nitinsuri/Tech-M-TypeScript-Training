import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
This is the index.ts file.
</section>
`;

function calculateTotal(items:number[], taxRate:number):number{
     // 1. Calculate the subtotal by summing all numbers in the array
     const subtotal = items.reduce((acc, price) => acc + price, 0);

     // 2. Apply the tax rate (e.g., if taxRate is 0.05, multiply by 1.05)
     const total = subtotal * (1 + taxRate);
 
     return total;   
}