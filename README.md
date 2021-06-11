### Tmall - Documentation

+ The project uses the back-end data, the online access data interaction function is invalid, please see the video effect

+ 1.Carousel chart: transparency carousel, mouse in, stop carousel, display page turning button, mouse out, start carousel, hide page turning button, click left and        right buttons to switch and enlarge the picture;
    2. Floor navigation: within a certain height range, display / hide the navigation, switch the navigation according to the current content, click navigation,            scroll to the corresponding content, refresh the home page, and the navigation will display the corresponding content
    3. Product: Ajax request database
    4. Login status: judge whether to login, and then request the database to load the shopping cart products

+ home page

  1. Login: judge whether to log in or not. If not, jump back to the login page. After successful login, return to this page and display the user name
  2. Product list: randomly recommend different products, click the shopping cart button to enter the product details

+ Login registration page

  1. Login: when the account password is wrong, you will be prompted that it is wrong. If it is correct, you will jump to the home page;
  2. Registration: enter the user name and password. After successful registration, you will jump to the login page

+ List page

  1. Page commodity display: request database commodity information through Ajax
  2. Each page displays 10 pieces of data: according to the pager, the information obtained is displayed in pages
  3. At the top of the list are comprehensive, popular, new products, and other options. Click to open the products according to different sorting
  4. Brand logo at the top of the list, click to select the current brand products

+ Details page

  1. Click the small picture below to switch browsing
  2. Use a magnifying glass to enlarge the picture of the current product
  3. Determine purchase specifications and quantities

+ Shopping Cart

  1. Quantity addition and subtraction: the function is equivalent to the addition and subtraction of detail page, sending Ajax request in real time, changing the          database;
  2. Delete: you can delete a single commodity or a selected commodity, and refresh after deleting;
  3. Selected status value: changes in real time according to the selected goods;
  4. When the shopping cart item is empty, click to buy it quickly, and then re-enter the list page to select your favorite items

     

      

  

