Feature: Car API Endpoint Testing

  Scenario Outline: Fetch cars by valid types
    Given I make a car GET request with type "<type>"
    Then I should receive a status code of 200
    And the response should include cars of type "<type>"
    And each car in the response should match the type "<type>"

  Examples:
    | type      |
    | Saloon    |
    | SUV       |
    | Hatchback |

  Scenario Outline: Attempt to fetch cars by invalid types
    Given I make a car GET request with type "<type>"
    Then I should receive a status code of 404

  Examples:
    | type        |
    | Convertible |
    | Coupe       |
    | Minivan     |
    | 1           |
    | !@#$%^&     |
    |             |
