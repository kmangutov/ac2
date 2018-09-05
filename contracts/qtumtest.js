const { Contract, QtumRPC } = require("qtumjs")

const rpc = new QtumRPC("")

async function main() {
  const contractInfo = require("./insurance.json") //yet to be added

  const foo = new Contract(rpc, contractInfo)

  const i = 400 //arbitrary set insurance test value
  console.log("setInsurance", i)
  const receipt = await foo.send("setInsurance", [i])

  console.log("txid", receipt.txid)
  console.log("waiting for transaction confirmation")
  await receipt.done(1)

  const callResult = await foo.call("insurance_current")

  return {
    r0: callResult[0],
    callResult,
  }
}

main().then((result) => {
  console.log("ok")
  console.log(result)
}).catch((err) => {
  console.log("err", err)
})
