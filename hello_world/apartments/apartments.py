import requests
import statistics
from bs4 import BeautifulSoup
import re

def convert_price(price):
    return int(price.replace("$", "").replace(",", ""))


def convert_price_range(price_range):
    prices = [convert_price(p) for p in price_range]
    return statistics.mean(prices)


def get_soup(url):
    page = requests.get(url)
    return BeautifulSoup(page.content, 'html.parser')


class BaseScraper:
    def __init__(self, url):
        self.url = url
        self.soup = get_soup(url)

    def get_prices(self):
        raise NotImplementedError


class EquityApartmentsScraper(BaseScraper):
    def __init__(self, url):
        super().__init__(url)

    def get_prices(self):
        f = self.soup.find(id='bedroom-type-2')
        prices = f.select('span.pricing')
        return [convert_price(p.text) for p in prices]


def azure_prices():
    return EquityApartmentsScraper('https://www.equityapartments.com/san-francisco-bay/mission-bay/azure-apartments'
                                   '##unit-availability-tile').get_prices()


def three_forty_fremont_prices():
    return EquityApartmentsScraper("https://www.equityapartments.com/san-francisco/rincon-hill/340-fremont-apartments"
                                   "##unit-availability-tile").get_prices()


def windsor_prices():
    soup = get_soup('https://www.missionbaybywindsor.com/floorplans')
    floorplan = soup.find(id='floorPlanAccordion_2')
    floorplans = floorplan.select('p.text-xl')

    l = []
    for f in floorplans:
        text = f.find('span').text
        if text != "Call for details":
            price_range = text.split('to-')
            l.append(convert_price_range(price_range))
    return l


def strata_prices():
    soup = get_soup('https://www.stratasf.com/floorplans')
    container = soup.find('div', id="floorplans-container")
    cards = container.select('div.card')
    two_beds = list(filter(lambda card: card.select('li div.d-flex')[0].text == '2 Bed', cards))
    res = []
    for entry in two_beds:
        text = entry.select('p.font-weight-bold')[0].text
        i = text.find('$')
        price = text[i:text.find('\r', i)]
        res.append(convert_price(price))
    return res


def avalon_mb_prices():
    def clean(p):
        return convert_price(p.split(' w / ')[0].split(' ')[-1])

    soup = get_soup("https://www.avaloncommunities.com/california/san-francisco-apartments/avalon-at-mission-bay"
                    "/apartments?bedroom=2BD")
    prices = soup.select('div.price')
    return [clean(x.text) for x in prices]


def edgewater_prices():
    soup = get_soup(
        "https://www.udr.com/san-francisco-bay-area-apartments/san-francisco/edgewater/apartments-pricing/?beds=2")
    scripts = soup.select('script')
    regex = r'"rentMin":[0-9\.]+'
    for s in scripts:
        if 'window.udr.jsonObjPropertyViewModel = {' in s.text:
            match = re.findall(regex, s.text)
            prices = list(set([float(x.split(":")[-1]) for x in match]))
            return prices
    return []


if __name__ == "__main__":
    print(strata_prices())
