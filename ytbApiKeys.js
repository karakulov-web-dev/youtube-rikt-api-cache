const keyArr = [];
for (let i = 0; i <= 60; i++) {
  keyArr.push("AIzaSyDKNaSr0YBGdkJE5g7AmdMnKNRmRV5toLc");
}
for (let i = 0; i <= 60; i++) {
  keyArr.push("AIzaSyDwfhWw-XUDSh_HQ38965RU_VBRqzVC6i8");
}
keyArr.concat([
  "AIzaSyBtseIfhI-5W6ixpVXHUHvCDmaPjNJXWGk",
  "AIzaSyAAsY6pKwhHX2-G9FC0_V7VC3hHkja-h3Q",
  "AIzaSyCMLfair0gNQhaEnEmfnrYVPaDE9RMtYt0",
  "AIzaSyBE6QP0bWjDav42P5tTmEznH-_SbFM9t78",
  "AIzaSyCZKdVUcqGny0KHuviZ-gndziL5tz_Z2k0",
  "AIzaSyDZTSKTv9FXIy4-730yGl_6lIAGVULSuJE",
  "AIzaSyAMAoN1b2BCECPZdDOFd6E0mmkB1MhYVrg",
  "AIzaSyCaDUKr6DkWfAInJP0513aFl3dhc51zDjs",
  "AIzaSyC3OjLd6C9Y0uUF2jryc2IANsT3BJES-4I",
  "AIzaSyC-FaxM1RHzUkNMj7ey5CP08JLUbhoACog",
  "AIzaSyCBFT54rBvv3kvE5p25CGQ8hfLZToffXv8",
  "AIzaSyASC810siro4D0YOWzz6UyMup9TX6XnUbs",
  "AIzaSyBOTnBozOX-TbhAShUD8M8Ap2qA-Z4OBjM",
  "AIzaSyCOPv1fH1j6N3A1PZrn8YUcuy--G8mXLfs",
  "AIzaSyBrurtkS03QwSCgOJ2DcKsNjUDrv4aYAuY",
  "AIzaSyATOC1nIZc2YgZt2QKLKq02cFJsCpQknxw",
  "AIzaSyBMEbzD9L7sD1fkl6M3lXUyucj37i_H_iM",
  "AIzaSyAJci326r2oQCwAdTD24rY0lK747FVD78Q",
  "AIzaSyAA9wqa7zJn3601xClUVP0IJ_DXNJ11ELY",
  "AIzaSyB3f79g6XAiKxbrZ3_5IqcEMalwLXlxoYo",
  "AIzaSyCosHh7RFx0kSEurP5COypKXnVE7OO2wYQ",
  "AIzaSyD6OADTUPcnUWNfj4Ixzb1dUZXL9Wkbpso",
  "AIzaSyDB_NJvp9eebuLX1hVzSnFKiouQv_XWiOQ",
  "AIzaSyCpHdmFWg4kbkb6Z22PefHfUCsVRqafwrc",
  "AIzaSyBGyl8yg5IPQQZq3ZQgVmIy2ZwAxxtWZKU",
  "AIzaSyDAx-EHVal-9SQrK1nX-LBvK-Ti3LI6Nr8",
  "AIzaSyAIAfbo_uGsEMvrhQDgM_cg4icBW-IzJ2M",
  "AIzaSyCkEdG5qFLlJpWtIXpKKGai8lPn-NeLz2s",
  "AIzaSyBizv4Kmnpv1en8dhi8Az_7p55EuVaglY4",
  "AIzaSyCiYkPIubi6GPZV_7JpNyT5zgBP1E0sST8",
  "AIzaSyAVnm620eOWHP8vF_a6qcp7J6F7dVftcV0",
  "AIzaSyDrD4FAt-o1mj7eXKbZ24pPvcDK4s7__94",
  "AIzaSyAWgZQqc8bJCmCj3Tgve3gV5OIX0LlVzCI",
  "AIzaSyA2SwQeByL82_myl42euBU_Hlddird1YNo"
]);

module.exports = _ => keyArr[Math.round(Math.random() * (keyArr.length - 1))];
