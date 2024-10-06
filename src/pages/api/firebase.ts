// src/components/libs/firebase.ts
import admin from "firebase-admin";

// Replace this with the path to your service account key file
const serviceAccount: any= {
  type: "service_account",
  project_id: "ot-streaming",
  private_key_id: "99d55281c800cb9df075ca4a3520706bb02d3777",
  private_key:
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDGHCE+j7fDFpnW\n" +
    "rBC5ecf5YGUnWZCAVa0t7l91HVdTQZLhWrO+DWGb5EtADm+AKQfF1R9gjxTcPgAI\n" +
    "qyXXDkZtj/Mtc11oC3Fg89KLn+SLZnSbbWlr1QB9q+n1/FROcynPV8asFF5LxEqI\n" +
    "OQ1h6U39qWg1khQMI7VQY9GAtUp9v88SZpTnhaMkbcU/JBG1f85h68TEZIF+S4x9\n" +
    "ZGXglrh137co+kIpQgsznfyZ/WcfMhdr9ddDQM4QBVYxIzoPX/NlIvDZvaflwPY5\n" +
    "PESzbYHgaWP2I0jPE1CieRNTz0R+IBO9rL4dPmEAWaiElVXTJrNB0g3zqGEcfpIK\n" +
    "hEnl9L4VAgMBAAECggEADHOCJ2NzAkDuZE6mMnIT/nlvghyf92DrJILh3wN8FJB/\n" +
    "gchomZ5PrzOXAyylF2H8yhNOCIyVnA4NhH31P+H2zTYJ66ZfjYWCl7xbVEk1XQmQ\n" +
    "dKBYyt01TbC7YKl+Rvv3+b8jjnctQgfRQ2SKkcfPDg1SrmNC/UxVPfs4FKXQS7zg\n" +
    "7us8ElY9fU2Hof2nY68/q8FgW9huhxlgeNxeLTlf0qp+39Pj2+pzsv6oX+7EyXP8\n" +
    "3L64cF++XT6AVMw2ipMByjy3MJ/EeUw61vm/zbi3tUcOJtyOps/AzZbrOAwMyPMi\n" +
    "oZI0AWtP4LZeYuBgqpaAicoCwyV9rdblKaDFxXIFVQKBgQD9QovYrSaekJpT8PTS\n" +
    "cR2xitCeLh9N/GNqxdCMEo5hDc7wLVjU8EZAkF51NLXionlOD4aU2F2W5pnk0xlm\n" +
    "B3IVgeaMPGDCWHzexXFV7Uo898/Us4/eMtn+SG52r6OKdKvhiuqWSkcM3xhsEoxn\n" +
    "H2VgdrmhYF+zAM+gpjbBjXIAkwKBgQDIQNWjtHp/2e5bpP3gJ7Elioh3nj0ZL0B5\n" +
    "lXdyCbm3rQiKLdz8nfWpm5TW2Z38rGfYqrVqn5SMbwmE7SNp0/++XKXGS4M83rPE\n" +
    "t3BEoy0vxw2RoIEMzSx6+ijkLeF3eSTq3f6noUmpBtNI7C0h+pjLCZXPgoyvJOh+\n" +
    "oOd0sUZ3twKBgQCxnF7I+T2xTEX/AmgfwZaKcYi2ti/cGFl8gvgrk8PoSq/K/nJi\n" +
    "+5K5KsYjunCoXTtnRDok3sxbzKM2t9kDFcurS6tsw9cz1KzV6m/+S+iZc018pOUL\n" +
    "dmwtCYz2jVzK9+Gmzi6Qccz8OOU+vY9brsgA66Jpi1XyCmqSBp82BEVkIwKBgQCo\n" +
    "Gjz9Ypje0KwWBIgV7lv33rY2bABwLslaB02wzlc3yCp+DIgRC+zYh0FHpoDIRlYa\n" +
    "fRszuWhzBxcfng33Xb63J4EF2AgARhb0kOTOyYg6LkfGss0CWQ344h0HhzhZGboS\n" +
    "625Fe9Cg8pjVA2XTu1EeSBqZisbclAgTnLEPtW0pOwKBgQDi5y3PyMx0Mb94+TKV\n" +
    "1rJCfJ2lrA4VtvVX+p+AX4yFCT04VpDKO+evbctnFq0dUO2aVk+0rqUZL8vCxydZ\n" +
    "0eWnavki17aUUcqGuDzULMIT3QFKLwZJ7tzk3Vfg2IZUBk5ojBL1LufRRAacXShn\n" +
    "G0mPIL8N4diQkQIUwpkBl0BIxw==\n" +
    "-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-f507p@ot-streaming.iam.gserviceaccount.com",
  client_id: "102326331420631354904",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-f507p%40ot-streaming.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // You can add additional options here if needed, like databaseURL
  });
}

const db = admin.firestore();

export { db };
