import boto3
from apartments.entities import ApartmentAvailability

PRICES_TABLE = "apartment-prices"


class DynamoDBClient:
    def __init__(self):
        self.db = boto3.resource("dynamodb")
        self.prices_table = self.db.Table(PRICES_TABLE)

    def add_prices(self, prices: ApartmentAvailability):
        return self.prices_table.put_item(Item=prices.to_dict())

    def get_all_prices(self):
        return self.prices_table.scan()['Items']
