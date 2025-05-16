import React from 'react'

const Userman = () => {
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 text-black ">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 text-black">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 text-black">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 text-black">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700 text-black">
                <th scope="row" class="px-6 py-4 font-medium   ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4 bg-gray-50 ">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4 bg-gray-50 ">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Userman