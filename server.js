const express = require("express")
const app = express()

const kelas = require("./router/end_kelas")
const petugas = require("./router/end_petugas")
const spp = require("./router/end_spp")
const siswa = require("./router/end_siswa")
const pembayaran = require("./router/end_pembayaran")
app.use("/pembayaran/spp/kelas", kelas)
app.use("/pembayaran/spp/petugas", petugas)
app.use("/pembayaran/spp/spp", spp)
app.use("/pembayaran/spp/siswa", siswa)
app.use("/pembayaran/spp/transaksi", pembayaran)

app.use(express.static(__dirname))

app.listen(8000, ()=> {
    console.log("Server run on port 8000")
})