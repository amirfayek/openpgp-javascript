const openpgp = require('openpgp');
const fs = require("fs");

(async () => {
  const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
2Q==
=NFQr
-----END PGP PUBLIC KEY BLOCK-----`

  const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----

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
=a+Ui
-----END PGP PRIVATE KEY BLOCK-----`

  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
  const passphrase = `Password123`;

  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase
  });

  const encryptedData = fs.readFileSync("encrypted.pgp");
  const message = await openpgp.readMessage({
    binaryMessage: encryptedData
  });
  const decrypted = await openpgp.decrypt({
    message,
    verificationKeys: publicKey,
    decryptionKeys: privateKey
  });

  console.log(decrypted);
})();
