import scrapy
class PostsSpider(scrapy.Spider):
    name = "posts"

    start_urls = [
        'https://blog.scrapinghub.com/'
    ]
    def parse(self, response):
        page=response.url.split('/')[-1]
        filname='posts.html' 
        with open(filname, 'wb') as f:
            f.write(response.body)