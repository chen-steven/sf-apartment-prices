from apartments.apartments import avalon_mb_prices, azure_prices, windsor_prices, strata_prices, \
    three_forty_fremont_prices, edgewater_prices
from apartments.entities import ApartmentAvailability
import logging

logger = logging.getLogger(__name__)

APARTMENTS = {
    'avalon-mb': avalon_mb_prices,
    'azure': azure_prices,
    'edgewater': edgewater_prices,
    'strata': strata_prices,
    '340-fremont': three_forty_fremont_prices,
    'windsor': windsor_prices
}


def get_current_prices():
    res = []
    for name, price_fn in APARTMENTS.items():
        try:
            res.append(ApartmentAvailability(name, price_fn()))
        except:
            logger.error(f"Error retrieving prices for {name}")

    return res
