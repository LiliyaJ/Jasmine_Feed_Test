
$(function() {
  
    describe('RSS Feeds', function() {

       //tests if allFeeds variables are defined and not empty
        it ('variables are defined and not empty',  ()=> {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //loops through each feed in the allFeeds object and ensures it has a URL define and is not empty.
        it ('urls are defined and not empty',  ()=> {
            for(let i = 0; i <allFeeds.length; i++){
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

    //loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it ('names are defined and not empty', () =>{
            for(let i = 0; i <allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The Menu', ()=>{

        //ensures the menu element is hidden by default
        it('menu is hidden', ()=>{
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //ensures the menu changes visibility when the menu icon is clicked
       it('menu changes', ()=>{
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', ()=>{

          // ensures when the loadFeed function is called and completes its work, 
          //there is at least a single .entry element within the .feed container.
        beforeEach((done)=>{
            loadFeed(0, ()=>{
                done();
            });
        });

        it('there is more then zero entries', ()=>{
            expect($('.feed .entry').length).not.toBeLessThan(0);
        });
    });

    describe('New Feed Selection', ()=>{
        
        //variables for saving content of url for asynchronus test
         let feedAfterFirstLoad;
         let feedAfterSecondLoad;
         
         beforeEach(function(done){
           loadFeed(0, function () {

            //get content of feed container
              feedAfterFirstLoad = document.querySelector('.entry').innerHTML;
              loadFeed(1, function () {
                  // get content of feed container again
                  feedAfterSecondLoad = document.querySelector('.entry').innerHTML;
                  done();
              });
           });
         });
         
         it('contain has changed', ()=>{
             //contents should not be equal
            expect(feedAfterFirstLoad).not.toBe(feedAfterSecondLoad);
         });
    });
}());
