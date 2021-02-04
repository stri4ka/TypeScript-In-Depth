{
  'categories': [{
    'childCategories': null,
    'items': [{
      'id': '0_CF_LOTSIZE',
      'lid': null,
      'oid': '5365',
      'path': 'CF_LOTSIZE',
      'dataType': 'INTEGER',
      'parameterSet': {
        'id': '0_CF_LOTSIZE',
        'pSetId': null,
        'parameters': [{
          'isRequired': false,
          'default': 'DESC',
          'sId': null,
          'values': [{
            'id': 'ASC',
            'name': 'Ascending',
            'isMinor': false
          }, {
            'id': 'DESC',
            'name': 'Descending',
            'isMinor': false
          }],
          'dataType': null,
          'types': null,
          'dynamic': null,
          'isMultiSelection': false,
          'id': 'SORT',
          'name': 'Sort Order',
          'description': null
        }, {
          'isRequired': false,
          'default': 'IDN',
          'sId': null,
          'values': [{
            'id': 'IDN',
            'name': 'IDN',
            'isMinor': false
          }, {
            'id': 'IDN_RDF',
            'name': 'IDN_RDF',
            'isMinor': false
          }],
          'dataType': null,
          'types': null,
          'dynamic': null,
          'isMultiSelection': false,
          'id': 'RTFEED',
          'name': 'RT Feed',
          'description': 'It specifies the source from which you want to retrieve real-time data.\nIt does not apply to fundamental data retrieved with TR.'
        }]
      },
      'isScreenable': null,
      'isGrid': null,
      'defaultOrder': 'HigherIsBetter',
      'isCompany': null,
      'isCached': false,
      'source': 'RT',
      'isHidden': false,
      'outputColumns': null,
      'universe': 'Public',
      'isTimeSeriesable': null,
      'enableHeatMap': true,
      'isAggregatable': null,
      'aggDesc': null,
      'aggType': null,
      'aggAuditType': null,
      'oldPath': null,
      'isEquity': null,
      'suggestScale': null,
      'isAbsComp': false,
      'ctFlag': null,
      'accessCodes': ['$ALL'],
      'histScale': 'log',
      'name': 'Lot Size',
      'description': 'the smallest quantity of a future which may be traded. for options: the contract size. for equities: the number of shares traded in a round lot.',
      'publicPrivatePath': null,
      'histAvailable': false,
      'firmField': null,
      'fundField': null,
      'firmFundHeader': 'Lot Size',
      'isFirm': null,
      'isFund': null
    }, {
      'id': '0_CF_LOW',
      'lid': null,
      'oid': '5366',
      'path': 'CF_LOW',
      'dataType': 'PRICE',
      'parameterSet': null,
      'isScreenable': null,
      'isGrid': null,
      'defaultOrder': 'HigherIsBetter',
      'isCompany': null,
      'isCached': false,
      'source': 'RT',
      'isHidden': false,
      'outputColumns': null,
      'universe': 'Public',
      'isTimeSeriesable': null,
      'enableHeatMap': true,
      'isAggregatable': null,
      'aggDesc': null,
      'aggType': null,
      'aggAuditType': null,
      'oldPath': null,
      'isEquity': null,
      'suggestScale': null,
      'isAbsComp': false,
      'ctFlag': null,
      'accessCodes': ['$ALL'],
      'histScale': 'log',
      'name': 'Low',
      'description': 'the lowest bid price or transaction value of the day',
      'publicPrivatePath': null,
      'histAvailable': false,
      'firmField': null,
      'fundField': null,
      'firmFundHeader': 'Low',
      'isFirm': null,
      'isFund': null
    }, {
      'id': '0_CF_LAST',
      'lid': null,
      'oid': '5364',
      'path': 'CF_LAST',
      'dataType': 'PRICE',
      'parameterSet': {
        'id': '0_CF_LAST',
        'pSetId': null,
        'parameters': [{
          'isRequired': false,
          'default': 'DESC',
          'sId': null,
          'values': [{
            'id': 'ASC',
            'name': 'Ascending',
            'isMinor': false
          }, {
            'id': 'DESC',
            'name': 'Descending',
            'isMinor': false
          }],
          'dataType': null,
          'types': null,
          'dynamic': null,
          'isMultiSelection': false,
          'id': 'SORT',
          'name': 'Sort Order',
          'description': null
        }, {
          'isRequired': false,
          'default': 'IDN',
          'sId': null,
          'values': [{
            'id': 'IDN',
            'name': 'IDN',
            'isMinor': false
          }, {
            'id': 'IDN_RDF',
            'name': 'IDN_RDF',
            'isMinor': false
          }],
          'dataType': null,
          'types': null,
          'dynamic': null,
          'isMultiSelection': false,
          'id': 'RTFEED',
          'name': 'RT Feed',
          'description': 'It specifies the source from which you want to retrieve real-time data.\nIt does not apply to fundamental data retrieved with TR.'
        }]
      },
      'isScreenable': null,
      'isGrid': null,
      'defaultOrder': 'HigherIsBetter',
      'isCompany': null,
      'isCached': false,
      'source': 'RT',
      'isHidden': false,
      'outputColumns': null,
      'universe': 'Public',
      'isTimeSeriesable': null,
      'enableHeatMap': true,
      'isAggregatable': null,
      'aggDesc': null,
      'aggType': null,
      'aggAuditType': null,
      'oldPath': null,
      'isEquity': null,
      'suggestScale': null,
      'isAbsComp': false,
      'ctFlag': null,
      'accessCodes': ['$ALL'],
      'histScale': 'log',
      'name': 'Last',
      'description': 'the latest trade price or value.',
      'publicPrivatePath': null,
      'histAvailable': false,
      'firmField': null,
      'fundField': null,
      'firmFundHeader': 'Last',
      'isFirm': null,
      'isFund': null
    }],
    'expressions': null,
    'hidden': false,
    'itemCount': 3,
    'id': 'TOP',
    'name': 'Top Matches',
    'description': 'Top matches for search CF_L'
  }, {
    'childCategories': [{ ///
      'childCategories': null,
      'items': null,
      'expressions': null,
      'hidden': false,
      'itemCount': 3,
      'id': '0',
      'name': 'Cross Asset',
      'description': null
    }],
    'items': null,
    'expressions': null,
    'hidden': false,
    'itemCount': 0,
    'id': 'RT',
    'name': 'Real Time',
    'description': null
  }],
  'foundCategories': null,
  'topHits': null,
  'source': 0,
  'exactMatches': null,
  'categoryChainIds': null
};