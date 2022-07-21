const React = require('react');

function Layout({title, children}){
    return (
        <html lang="en">
        <head>  
          <title>{title}</title> 
        </head>
        <body>
          {children}
        </body>
      </html>
    )
}

module.export = Layout;