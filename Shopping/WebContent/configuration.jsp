<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Configuration</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		
        <link rel="stylesheet" type="text/css" href="css/xmlEditorPage.css" />
        <link rel="stylesheet" type="text/css" href="js/jAlert/css/jquery.alerts.css" /> 
    </head>
    <body>
        <div class="">
            <div class="">

                <div class="container">
                    
                    <div id="configWindow">
                        <div class="login_page_logo_div">
                                <img title="ACS Tenant Management v0.0.0.2" style="height: 40px; width: 95px;" src="configImages/images/Logo12.png">
                            </div>
                            <div id="configWindowHeading">
                                WS Configuration
                            </div>
                        
                        <div id="configWindowFields">
                                
                                    <div class="center_align">
                                        <input title="Connection Name" required="" type="text" placeholder="Enter Connection Name" name="txtconnection" id="connection" class="inputbox_login_page" style="width:91%;" />
                                    </div>
                                    <div class="center_align">
                                        <input title="Driver Name" required="" type="text" placeholder="Enter Driver Name" name="txtdriver" id="driver" class="inputbox_login_page" style="width:91%;" />
                                    </div>
                                    <div class="center_align">
                                        <input title="Username" required="" type="text" placeholder="Enter Username" name="txtusername" id="username" class="inputbox_login_page" style="width:91%;" />
                                    </div>
                                    <div class="center_align">
                                        <input title="Password" required="" type="password" placeholder="Enter Password" name="txtpassword" id="password" class="inputbox_login_page" style="width:91%;" />
                                    </div>

                                    <table>

                                        <tr>
                                            <td colspan="2" class=center_align>
                                        <center>
                                            <label class='errordisplay'>

                                            </label>
                                        </center>
                                        </td>
                                        </tr>

                                    </table>
                                      
                            <div id="validation" class="loginwarning"></div>
                            <div class="configWindowBtnAlign">	    
                            <input type="button" value="Modify" id="Modify" title="Modify" onclick=""  tabindex="3" class="submit_btn_image_index btn_wd_ht_index textfont"/>
                            <input type="button" value="Save" id="Save" title="Save DB details" onclick="updateWebServiceDetails();"  tabindex="3" style="display: none;" class="submit_btn_image_index btn_wd_ht_index textfont"/>
                                <!--<input type="reset"  value="Reset" id="Reset" title="Reset" onclick="ResetFields();" tabindex="4" class="reset_btn_image_index btn_wd_ht_index textfont">-->
                            </div>                   
                            </div>
                        
                        
                        
                    </div>
                   
                </div>
            </div>


        </div>
        
        <script type="text/javascript" src="js/jAlert/js/jquery.js"></script>
        <script type="text/javascript" src="js/jAlert/js/jquery.alerts.js"></script>
        <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
        <script type="text/javascript" src="js/myjs/updateWebServiceDetails.js"></script>
        
    </body>
</html>