For more thorough documentation, preview the app, and go to http://localhost:4567/README.html

To PREVIEW the app at http://localhost:4567/index.html :

ruby app.rb
(or double click the preview.bat file)
then VIEW IN A BROWSER AT http://localhost:4567/index.html

To make sure the latest HTML has been generated to the static folder:

rake build
(or double click the build.bat file)

To EXPORT a standalone version of the site to the folder above root:

rake export
(or double click the export.bat)

Note: this would only be relevant for burning a disc or for FTP

To deploy to dev or stage:

use the svn hooks:
! DEPLOY TO DEV ! or
! DEPLOY TO  STAGE !