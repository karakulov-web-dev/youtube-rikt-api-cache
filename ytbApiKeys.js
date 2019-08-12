var keyArr = [];
for (let i = 0; i <= 62; i++) {
  keyArr.push("AIzaSyDKNaSr0YBGdkJE5g7AmdMnKNRmRV5toLc");
}
for (let i = 0; i <= 62; i++) {
  keyArr.push("AIzaSyDwfhWw-XUDSh_HQ38965RU_VBRqzVC6i8");
}
keyArr = keyArr.concat([
  "AIzaSyAAsY6pKwhHX2-G9FC0_V7VC3hHkja-h3Q",
  "AIzaSyBtseIfhI-5W6ixpVXHUHvCDmaPjNJXWGk",
  "AIzaSyCMLfair0gNQhaEnEmfnrYVPaDE9RMtYt0",
  "AIzaSyBE6QP0bWjDav42P5tTmEznH-_SbFM9t78",
  "AIzaSyCZKdVUcqGny0KHuviZ-gndziL5tz_Z2k0",
  "AIzaSyCaDUKr6DkWfAInJP0513aFl3dhc51zDjs",
  "AIzaSyCBFT54rBvv3kvE5p25CGQ8hfLZToffXv8",
  "AIzaSyDZTSKTv9FXIy4-730yGl_6lIAGVULSuJE",
  "AIzaSyAMAoN1b2BCECPZdDOFd6E0mmkB1MhYVrg",
  "AIzaSyAWgZQqc8bJCmCj3Tgve3gV5OIX0LlVzCI",
  "AIzaSyA2SwQeByL82_myl42euBU_Hlddird1YNo",
  "AIzaSyDMX-4Ds_nSYb_dYdMEh5hESaXP4iYEy0k",
  "AIzaSyATOC1nIZc2YgZt2QKLKq02cFJsCpQknxw",
  "AIzaSyAJci326r2oQCwAdTD24rY0lK747FVD78Q",
  "AIzaSyAA9wqa7zJn3601xClUVP0IJ_DXNJ11ELY",
  "AIzaSyDB_NJvp9eebuLX1hVzSnFKiouQv_XWiOQ",
  "AIzaSyCpHdmFWg4kbkb6Z22PefHfUCsVRqafwrc",
  "AIzaSyCiYkPIubi6GPZV_7JpNyT5zgBP1E0sST8",
  "AIzaSyBizv4Kmnpv1en8dhi8Az_7p55EuVaglY4",
  "AIzaSyDrD4FAt-o1mj7eXKbZ24pPvcDK4s7__94",
  "AIzaSyAFPkNAL4SLdFIhEV7wzb0SyqSQfsEJj9E",
  "AIzaSyDztBQYaRVEaN1iugg6Z9tMVIiWAyS7y_k",
  "AIzaSyDb-OCS9x0R-QnY7b-whE0IIrghgMrfezM",
  "AIzaSyCrU5gmSJ3MxT7JwNqmc5KbLWTI6qgBd7A",
  "AIzaSyD25MJa-xvEHdqbqOqunpQtoEnv1Ny-EMk",
  "AIzaSyCwZgRplBrQbghnnZVzxWDYBHcTAtiPPfc",
  "AIzaSyC5fs_uDoTbuvj9QnNF5E0tT5PDWDZUx6A",
  "AIzaSyDDRi4RwlVz-EJODbhenCTbSJC9lykcqCI",
  "AIzaSyB_LoW49tgPUCx9NLY7aUrVsGLJHkOreiI",
  "AIzaSyCiKFdrq9SXDKBUA1_AMKg_C6zktGeLMVc",
  "AIzaSyBwFlHI3wYUDsAOqFFQapbLpvMh3TRkL90",
  "AIzaSyBrATHrxdId9cSbG3V4tSZcnDPV_wbxlf8",
  "AIzaSyAXh9PqJtYUpi70t_znfmchZw1oRWuQgMc",
  "AIzaSyDLkckuZMAmP2hzjPd4-S_q-p2xRpfJqAw",
  "AIzaSyCOojw7QL98CE95jvAAxjnVcLBi9aji3wE",
  "AIzaSyBDg0v3AYNeGvlzg2qT_GxXymsklapeB_Y",
  "AIzaSyAWWZHzq3AlTqlq_TPOvWF1OsuhH5v9Xw8",
  "AIzaSyCSPJ0iw7GWi5ZaYNv5QxzLt8XPEHktVgo",
  "AIzaSyD4lnzvr6TSvFFfFucnnM3gJNsjAl34otM",
  "AIzaSyCOKIVpBNaAar1IUkh_AY_oDhHyo7ghzQI",
  "AIzaSyApjvNEEutQekkl9AwfcX_MXE33mUuph3Q",
  "AIzaSyDbPypnn_wcsU1eZD0DfZ0dInO3bETHUyQ",
  "AIzaSyDbdzusigtJDhZspAnitv_eneKjaOHGjMY"
]);

module.exports = _ => keyArr[Math.round(Math.random() * (keyArr.length - 1))];
