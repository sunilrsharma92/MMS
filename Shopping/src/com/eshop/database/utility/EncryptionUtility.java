/*package com.eshop.database.utility;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;
//import org.apache.log4j.Logger;

//import com.diipl.securecrypto.impl.SecureKeyManager;
//import com.diipl.securecrypto.services.DecryptService;
//import com.diipl.securecrypto.services.EncryptService;


public class EncryptionUtility {
	
//	private static final Logger log = Logger.getLogger(EncryptionUtility.class);
	
	public static synchronized String encryptUsingMD5(String plaintext) throws Exception{
		char[] arr = null;
		MessageDigest msgDigest = null;
        try {
			msgDigest = MessageDigest.getInstance("MD5");
			msgDigest.update(plaintext.getBytes("UTF-8"));
			byte rawByte[] = msgDigest.digest();
			arr = Hex.encodeHex(rawByte);
        }
        catch (NoSuchAlgorithmException nse) {
            System.out.println("No Such Algorithm Exists");
            nse.printStackTrace();
        }
        catch (UnsupportedEncodingException ue) {
            System.out.println("The Encoding Is Not Supported");
            ue.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
		String encryptedHexStr = new String(arr);
		log.debug("encryptedHexStr :   "+encryptedHexStr);
		return encryptedHexStr;
	}
	
	public static synchronized String diiplPackageDecrypt(String encryptedData){
		DecryptService decSvc = new DecryptService();
		EncryptService enc = null;//EncryptService();
		enc.
		SecureKeyManager keyman = new SecureKeyManager("Y07TOJcL8mTaM22ffnTSE15ZU3QukX70HVEj283u99bKLklIYr/rXRn5wcm/fYPo");
		byte[] lineBytes = null;
		try {
			lineBytes = decSvc.decrypt1(Hex.decodeHex(encryptedData.toCharArray()), "740FB812D2D24CCBBA5CFEE6475B9E30", keyman);
		} catch (DecoderException e) {
			e.printStackTrace();
			return null;
		}
		String decryptedHexStr = new String(lineBytes);
		log.debug("decryptedHexStr :   "+decryptedHexStr);
		return decryptedHexStr;
	}
	
	public static synchronized String diiplPackageEncrypt(String plaintext){
			String encData = null;
			try {
				EncryptService encSvc = new EncryptService();
				SecureKeyManager keyman1 = new SecureKeyManager("vTY7bLX9WSkg+b1HAZkvk6f77W0+a7allXRvvZX6QMaAYv8DkpfauqcLdcsd68dM");
				log.debug("plaintext==="+plaintext);

				byte[] linebytes = null;
				linebytes = encSvc.encrypt1(plaintext.getBytes("UTF-8"), "740FB812D2D24CCBBA5CFEE6475B9E30", keyman1);
				log.debug("linebytes === "+linebytes);
		
				char[] arr = Hex.encodeHex(linebytes);
				encData = new String(arr);
				log.debug("encrypted data : "+encData);
			
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
				return null;
			}
			catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			return encData;
	}
}*/