import nacl from "tweetnacl";
import bs58 from "bs58";

export function verifySignature(
  message: string,
  signature: string,
  publicKey: string,
): boolean {
  try {
    const messageBytes = Buffer.from(message, "utf8");
    const signatureBytes = bs58.decode(signature);
    const publicKeyBytes = bs58.decode(publicKey);
    return nacl.sign.detached.verify(
      messageBytes,
      signatureBytes,
      publicKeyBytes,
    );
  } catch {
    return false;
  }
}
