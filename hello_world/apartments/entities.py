import statistics
from typing import List
from datetime import datetime
from decimal import Decimal
import uuid


class ApartmentAvailability:
    def __init__(self, name, prices: List[float]):
        self.name = name
        self.prices = prices
        self.id = str(uuid.uuid1())
        self.date = datetime.now().isoformat()
        self.min_price = min(prices)
        self.max_price = max(prices)
        self.mean_price = statistics.mean(prices)
        self.median_price = statistics.median(prices)

    def to_dict(self):
        """Serialize the model to a dictionary."""
        res = {k: v for k, v in self.__dict__.items() if not k.startswith("_")}
        for k, v in res.items():
            if type(v) is float:
                res[k] = Decimal(str(v))
        res['prices'] = [Decimal(str(x)) for x in res['prices']]
        return res


if __name__ == "__main__":
    import simplejson as json
    a = ApartmentAvailability("strata", [1.,2.,3.])
    print(json.dumps(a.to_dict()))