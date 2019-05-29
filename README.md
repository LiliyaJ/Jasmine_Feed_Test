# Test overview

Feedreader.js tests four aspects of the UdaciFeed: 

## RSS Feeds

Has three functions:

### variables are defined and not empty
The functions goes through RSS Feeds and it tests that the allFeeds variable has been defined and that it is not empty.

### urls are defined and not empty 
The functions goes through each variable, which consists of one url and one name and tests if each url is defined and not empty.

### names are defined and not empty
The functions goes through each variable, which consists of one url and one name and tests if each name is defined and not empty.

## The menu
This suite has two functions:

### menu is hidden
This function ensures the menu element is hidden by default.

### manu changes
This function ensures the menu changes visibility when the menu icon is clicked.

## Initial Entries

This suite has a function 'there is more then zero entries' that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Because loadFeed() is asynchronous so this test has also beforeEach and asynchronous done() function.

## New Feed Selection

This suite has a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
The suite contains beforeEach and asynchronous done() function, bacuase laodFeeds() is asynchronous.

# open the programm

[here you can open the project]()
