const { test, expect, request } = require("@playwright/test");
let id = undefined
let emailId = `snehalkamble785${Math.floor(Math.random() * 1000)}@gmail.com`

test("GET api request", async ({ request }) => {
  let req = await request.get("https://gorest.co.in/public/v2/users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer 4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5",
    }
  });
  let res = await req.json()
  console.log(res)
  //expect(res[0].id).toBe( 6909425)
  // expect(res[0].name).toBe('snehal kamble')
  //expect(res[1].id).toBe( 6909412)
  expect(res.length).toBe(10)
});


test('POST api request for create user', async ({ request }) => {
  console.log(emailId)
  let req2 = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer 4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5",
    },
    data: {
      "name": "snehal kamble",
      "gender": "female",
      "email": emailId,
      "status": "active"

    }
  })
  let res2 = await req2.json()
  console.log(res2)
  console.log(await req2.json())
  await expect(req2.status()).toBe(201)
  console.log(await res2.name)
  await expect(res2.name).toBe("snehal kamble")
  await expect(res2.gender).toBe("female")
  await expect(res2.status).toBe('active')


})
test('PUT api request for update user', async ({ request }) => {
  console.log(id)
  let req3 = await request.put("https://gorest.co.in/public/v2/users/6910682", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer 4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5"
    },
    data: {
      "name": "nikita kamble",
      "gender": "female",
      "email": emailId,
      "status": "active"

    }
  })
  let res3 = await req3.json()
  console.log(res3)
  await expect(req3.status()).toBe(200)
  await expect(res3.name).toBe('nikita kamble')
  await expect(res3.status).toBe('active')
  //await expect(res3.gender).toBe('female')


})
test('DELETE API request for  User', async ({ request }) => {
  let req4 = await request.delete("https://gorest.co.in/public/v2/users/6910682", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer 4acf0dda2b264f207bd938e597ac2f9ba271c0b1fd6583ccdd7d910688cc68e5",
    }
  })
  await expect(req4.status()).toBe(204)
})


