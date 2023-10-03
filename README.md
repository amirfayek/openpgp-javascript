# openpgp-javascript

This code was written to replicate a client using javascript to decrypt a file using OpenPGP.

This is an example of Ruby code use to encrypt a file using OpenPGP:
```
def self.pgp_encrypt(path_to_encrypt, output_path)
  GPGME::Key.import(ENV['PGP_PUBLIC_KEY'])

  crypto = GPGME::Crypto.new(always_trust: true, protocol: GPGME::PROTOCOL_OpenPGP)
  File.open(path_to_encrypt, 'r') do |in_file|
    File.open(output_path, 'wb') do |out_file|
      crypto.encrypt in_file, output: out_file, recipients: 'amir@amirfayek.com'
    end
  end
end
```
