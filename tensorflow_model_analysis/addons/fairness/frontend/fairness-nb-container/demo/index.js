/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  const createSliceMetrics1 = () => {
    return {
      'accuracy': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/positive_rate@0.50': {
        'doubleValue': NaN,
      },
      'post_export_metrics/negative_rate@0.50': {
        'doubleValue': Math.random(),
      },
      'post_export_metrics/positive_rate@0.60': {
        'boundedValue': {
          'lowerBound': NaN,
          'upperBound': NaN,
          'value': NaN,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/negative_rate@0.60': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/positive_rate@0.70': {
        'doubleValue': NaN,
      },
      'post_export_metrics/negative_rate@0.70': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/positive_rate@0.80': {
        'boundedValue': {
          'lowerBound': NaN,
          'upperBound': NaN,
          'value': NaN,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/negative_rate@0.80': {
        'doubleValue': Math.random(),
      },
      'post_export_metrics/example_count':
          {'doubleValue': Math.floor(Math.random() * 100)},
      'totalWeightedExamples': {'doubleValue': 2000 * (Math.random() + 0.8)},

      // These two metrics only exist inside this eval result
      'addtionalMetrics1': {'doubleValue': 2000 * (Math.random() + 0.8)},
      'addtionalMetrics2': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      }
    };
  };

  const createSliceMetrics2 = () => {
    return {
      'accuracy': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      // doubleValue NaN vs doubleValue NaN
      'post_export_metrics/positive_rate@0.50': {
        'doubleValue': NaN,
      },
      // doubleValue vs doubleValue
      'post_export_metrics/negative_rate@0.50': {
        'doubleValue': Math.random(),
      },
      // boundedValue NaN vs boundedValue NaN
      'post_export_metrics/positive_rate@0.60': {
        'boundedValue': {
          'lowerBound': NaN,
          'upperBound': NaN,
          'value': NaN,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      // boundedValue vs boundedValue
      'post_export_metrics/negative_rate@0.60': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      // Double NaN vs boundedValue
      'post_export_metrics/positive_rate@0.70': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      // boundedValue vs doubleValue
      'post_export_metrics/negative_rate@0.70': {
        'doubleValue': Math.random(),
      },
      // doubleValue NaN vs Double
      'post_export_metrics/positive_rate@0.80': {
        'doubleValue': Math.random(),

      },
      // doubleValue vs boundedValue
      'post_export_metrics/negative_rate@0.80': {
        'boundedValue': {
          'lowerBound': Math.random() * 0.3,
          'upperBound': Math.random() * 0.3 + 0.6,
          'value': Math.random() * 0.3 + 0.3,
          'methodology': 'POISSON_BOOTSTRAP'
        }
      },
      'post_export_metrics/example_count':
          {'doubleValue': Math.floor(Math.random() * 100)},
      'totalWeightedExamples': {'doubleValue': 2000 * (Math.random() + 0.8)}
    };
  };

  const SLICES1 = [
    'Overall', 'Slice:unique', 'Slice:1', 'Slice:2', 'Slice:3', 'Slice:4',
    'Slice:5', 'Slice:6', 'Slice:7', 'Slice:8', 'Slice:9', 'Slice:10',
    'Slice:11', 'Slice:12', 'Slice:13', 'Slice:14', 'Slice:15', 'Slice:16'
  ];
  const input1 = SLICES1.map((slice) => {
    return {
      'slice': slice,
      'sliceValue': slice.split(':')[1] || 'Overall',
      'metrics': createSliceMetrics1(),
    };
  });

  const SLICES2 = [
    'Overall', 'Slice:1', 'Slice:2', 'Slice:3', 'Slice:4', 'Slice:5', 'Slice:6',
    'Slice:7', 'Slice:8', 'Slice:9', 'Slice:10', 'Slice:11', 'Slice:12',
    'Slice:13', 'Slice:14', 'Slice:15', 'Slice:16'
  ];
  const input2 = SLICES2.map((slice) => {
    return {
      'slice': slice,
      'sliceValue': slice.split(':')[1] || 'Overall',
      'metrics': createSliceMetrics2(),
    };
  });

  const input3 = SLICES1.map((slice) => {
    return {
      'slice': slice,
      'sliceValue': slice.split(':')[1] || 'Overall',
      'metrics': createSliceMetrics1(),
    };
  });

  const element_compare = document.getElementsByTagName('fairness-nb-container')[0];
  element_compare.slicingMetrics = input1;
  element_compare.slicingMetricsCompare = input2;
  element_compare.evalName = 'Eval1';
  element_compare.evalNameCompare = 'Eval2';
  element_compare.availbleEvaluationRuns = ['1', '2', '3'];

  const element = document.getElementsByTagName('fairness-nb-container')[1];
  element.slicingMetrics = input3;
})();
