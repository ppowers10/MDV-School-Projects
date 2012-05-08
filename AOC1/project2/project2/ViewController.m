//
//  ViewController.m
//  Project2
//
//  Created by Patrick Powers on 5/7/12.
//  Copyright (c) 2012 Full Sail University. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
//    Change the background color of the view to any color you wish.
    
    self.view.backgroundColor = [UIColor blueColor];
    
//Book Information and UILabels
//Create a UILabel and place it at the top of the view. This is used as the title of the book. Center the text for this label.
    
    UILabel *labelTitle = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 0.0f, 320.0f, 40.0f)];
    if (labelTitle != nil)
    {
        labelTitle.text = @"HTML5 & CSS3 for the Real World";
        labelTitle.textAlignment = UITextAlignmentCenter;
    }
    [self.view addSubview:labelTitle];
    
//Create another label that contains the text "Author:" with the text right justified.
    
    UILabel *labelAuthor = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 80.0f, 90.0f, 25.0f)];
    if(labelAuthor != nil)
    {
        labelAuthor.text = @"Author:";
        labelAuthor.textAlignment = UITextAlignmentRight;
    }
    [self.view addSubview:labelAuthor];
    
//Create a UILabel to the right of the author title label and have it contain the name of the author of the book you chose. This text will be left justified.
  
    UILabel *labelAuthorName = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 80.0f, 230.0f, 50.0f)];
    if(labelAuthorName != nil)
    {
        labelAuthorName.text = @"Alexis Goldstein, Louis Lazaris, & Estelle Weyl";
        labelAuthorName.textAlignment = UITextAlignmentLeft;
        labelAuthorName.numberOfLines = 2;
    }
    [self.view addSubview:labelAuthorName];
    
//Create a UILabel on the next line called "Published:". This text is right justified.

    UILabel *labelPublished = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 140.0f, 90.0f, 25.0f)];
    if(labelPublished != nil)
    {
        labelPublished.text = @"Published:";
        labelPublished.textAlignment = UITextAlignmentRight;
    }
    [self.view addSubview:labelPublished];
    
//Create a label next to the Published label and add the text of when the book was published. This text is left justified
    
    UILabel *labelPublishedDate = [[UILabel alloc] initWithFrame:CGRectMake(100.0f, 140.0f, 230.0f, 25.0f)];
    if(labelAuthorName != nil)
    {
        labelPublishedDate.text = @"May 2011";
        labelPublishedDate.textAlignment = UITextAlignmentLeft;
    }
    [self.view addSubview:labelPublishedDate];    

//Create a UILabel with the text "Summary". This text is left justified.

    UILabel *labelSummary = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 185.0f, 90.0f, 25.0f)];
    if(labelSummary != nil)
    {
        labelSummary.text = @"Summary:";
        labelSummary.textAlignment = UITextAlignmentLeft;
    }
    [self.view addSubview:labelSummary];

//Create another UILabel that contains a small summary of the book's plot. This text is centered and should span multiple lines.
    UILabel *labelSummaryText = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 210.0f, 320.0f, 100.0f)];
    if(labelSummaryText != nil)
    {
        labelSummaryText.text = @"This book is an introduction to the latest in web development technologies. It is an easy-to-follow guide that will allow readers to master semantic HTML5 and CSS3.";
        labelSummaryText.textAlignment = UITextAlignmentLeft;
        labelSummaryText.numberOfLines = 8;
    }
    [self.view addSubview:labelSummaryText];        
    
//Labels and Arrays
//Create an NSArray of 5 items talked about in the book. These items will be NSStrings. Add the items to the array.

//Create a variable of type NSMutableString and allocate it. Loop through the NSArray you created and append each of these items to your NSMutableString separated by commas. (For example: dinosaurs, jeeps, storm, giant turkeys, eating people)

    
//Create a label with the text "List of items" and add it to the parent view. Make sure the text is left justified.

    
//Create another label beneath and set the text to the NSMutableString text. Increase the number of lines if necessary. Make sure the text in this label is centered

	
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
