# 100xSchool Repository

This repository contains all assignments, lecture notes, and projects from the 100xDevs cohort.

---

## 📂 Project Structure

```text
.
├── 📁 100xDevs/                   # Main Cohort Content
│   ├── 📁 Advanced-Javascript/    # Callbacks, Promises, and Async
│   └── 📁 week-1-assignment/      # Basic JS assignments
├── 📁 DSA-Assignments/            # Searching, Sorting, and Arrays
├── 📁 Projects/                   # Individual and group projects
├── 📄 .gitignore                  # Global exclusion rules
└── 📄 README.md                   # You are here
```

<details>
<summary><b>Click to expand full file-level tree</b></summary>

</details>

```
.
├── 100xDevs
│   ├── Advanced-Javascript-Assignments-w3-4
│   │   ├── callbacks
│   │   │   ├── easy
│   │   │   │   ├── callbackify.js
│   │   │   │   ├── delay.js
│   │   │   │   ├── fetchWithTimeout.js
│   │   │   │   ├── once.js
│   │   │   │   ├── rejectAfter.js
│   │   │   │   ├── retryOnce.js
│   │   │   │   └── sleep.js
│   │   │   ├── hard
│   │   │   │   ├── createSmartDebounce.js
│   │   │   │   ├── createWindowAggregator.js
│   │   │   │   ├── fifoMutex.js
│   │   │   │   ├── LeakyBucket.js
│   │   │   │   ├── mapLimit.js
│   │   │   │   ├── Scheduler.js
│   │   │   │   └── TimeSlicedScheduler.js
│   │   │   └── medium
│   │   │       ├── batchProcess.js
│   │   │       ├── CallbackPool.js
│   │   │       ├── DynamicPriorityQueue.js
│   │   │       ├── GuardedAPI.js
│   │   │       ├── hedgedRequest.js
│   │   │       └── runWithDependencies.js
│   │   ├── cpu-io
│   │   │   ├── easy
│   │   │   │   ├── blockEventLoop.js
│   │   │   │   ├── checkFileExists.js
│   │   │   │   ├── chunkArray.js
│   │   │   │   ├── eventLoopRace.js
│   │   │   │   ├── heavyCPU.js
│   │   │   │   ├── ioWithTimeout.js
│   │   │   │   ├── measureTime.js
│   │   │   │   ├── runParallel.js
│   │   │   │   ├── runSequential.js
│   │   │   │   ├── sumFileSizes.js
│   │   │   │   └── yieldedCPU.js
│   │   │   ├── hard
│   │   │   │   ├── RateLimiter.js
│   │   │   │   ├── Semaphore.js
│   │   │   │   └── WorkerPool.js
│   │   │   └── medium
│   │   │       ├── AsyncCache.js
│   │   │       ├── chunkedProcessor.js
│   │   │       ├── deduplicatedFetch.js
│   │   │       ├── fetchDeep.js
│   │   │       ├── makeCancellable.js
│   │   │       ├── processLargeArray.js
│   │   │       └── retryWithJitter.js
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── promises
│   │   │   ├── easy
│   │   │   │   ├── delayResult.js
│   │   │   │   ├── doubleTry.js
│   │   │   │   ├── ensureAsync.js
│   │   │   │   ├── getUserPosts.js
│   │   │   │   ├── promiseAll.js
│   │   │   │   ├── promiseAny.js
│   │   │   │   ├── promiseRace.js
│   │   │   │   ├── promisify.js
│   │   │   │   ├── sumPromises.js
│   │   │   │   ├── timeLimit.js
│   │   │   │   └── withTimeoutPromise.js
│   │   │   ├── hard
│   │   │   │   ├── Cache.js
│   │   │   │   ├── chunkedAsyncReduce.js
│   │   │   │   ├── circuitBreaker.js
│   │   │   │   ├── circuitHedgedFetch.js
│   │   │   │   ├── createBatcher.js
│   │   │   │   ├── createResumableMapper.js
│   │   │   │   ├── createSequencedResolver.js
│   │   │   │   ├── createSWRManager.js
│   │   │   │   ├── createThrottledCollector.js
│   │   │   │   ├── DistributedLock.js
│   │   │   │   ├── FairScheduler.js
│   │   │   │   ├── findDistributedMedian.js
│   │   │   │   ├── PriorityMutex.js
│   │   │   │   ├── runAbortableGraph.js
│   │   │   │   ├── runDependentTasks.js
│   │   │   │   ├── runPipeline.js
│   │   │   │   ├── runSaga.js
│   │   │   │   ├── runTaskGraph.js
│   │   │   │   ├── speculativeFetch.js
│   │   │   │   ├── streamMergeGraph.js
│   │   │   │   ├── transactionalBatchMap.js
│   │   │   │   ├── transactionalWrite.js
│   │   │   │   └── WeightedRateLimiter.js
│   │   │   └── medium
│   │   │       ├── AsyncEventEmitter.js
│   │   │       ├── asyncReduceLimited.js
│   │   │       ├── asyncWaterfall.js
│   │   │       ├── Barrier.js
│   │   │       ├── batchAll.js
│   │   │       ├── createBatcher.js
│   │   │       ├── createIdempotentExecutor.js
│   │   │       ├── createSharedRequest.js
│   │   │       ├── createWindowAggregatorPromise.js
│   │   │       ├── deepClone.js
│   │   │       ├── everyAsync.js
│   │   │       ├── mapAsyncLimit.js
│   │   │       ├── monitorPromise.js
│   │   │       ├── PriorityQueueExecutor.js
│   │   │       ├── promiseAllSettled.js
│   │   │       ├── raceWithMetadata.js
│   │   │       ├── resolveDependencies.js
│   │   │       ├── retryWithBackoff.js
│   │   │       ├── switchMap.js
│   │   │       ├── swrCache.js
│   │   │       ├── taskScheduler.js
│   │   │       ├── TimedMutex.js
│   │   │       ├── timeToRot.js
│   │   │       ├── withCleanup.js
│   │   │       └── withTimeout.js
│   │   ├── README.md
│   │   └── tests
│   │       ├── AsyncCache.test.js
│   │       ├── AsyncEventEmitter.test.js
│   │       ├── asyncReduceLimited.test.js
│   │       ├── asyncWaterfall.test.js
│   │       ├── Barrier.test.js
│   │       ├── batchAll.test.js
│   │       ├── Batcher.test.js
│   │       ├── batchProcess.test.js
│   │       ├── blockEventLoop.test.js
│   │       ├── Cache.test.js
│   │       ├── callbackify.test.js
│   │       ├── CallbackPool.test.js
│   │       ├── checkFileExists.test.js
│   │       ├── chunkArray.test.js
│   │       ├── chunkedAsyncReduce.test.js
│   │       ├── chunkedProcessor.test.js
│   │       ├── circuitBreaker.test.js
│   │       ├── circuitHedgedFetch.test.js
│   │       ├── createBatcher.test.js
│   │       ├── createIdempotentExecutor.test.js
│   │       ├── createResumableMapper.test.js
│   │       ├── createSequencedResolver.test.js
│   │       ├── createSharedRequest.test.js
│   │       ├── createSmartDebounce.test.js
│   │       ├── createSWRManager.test.js
│   │       ├── createThrottledCollector.test.js
│   │       ├── createWindowAggregator.test.js
│   │       ├── createWindowAggregatorPromise.test.js
│   │       ├── deduplicatedFetch.test.js
│   │       ├── deepClone.test.js
│   │       ├── delay.test.js
│   │       ├── delayResult.test.js
│   │       ├── DistributedLock.test.js
│   │       ├── doubleTry.test.js
│   │       ├── DynamicPriorityQueue.test.js
│   │       ├── ensureAsync.test.js
│   │       ├── eventLoopRace.test.js
│   │       ├── everyAsync.test.js
│   │       ├── FairScheduler.test.js
│   │       ├── fetchDeep.test.js
│   │       ├── fetchWithTimeout.test.js
│   │       ├── fifoMutex.test.js
│   │       ├── findDistributedMedian.test.js
│   │       ├── getUserPosts.test.js
│   │       ├── GuardedAPI.test.js
│   │       ├── heavyCPU.test.js
│   │       ├── hedgedRequest.test.js
│   │       ├── ioWithTimeout.test.js
│   │       ├── LeakyBucket.test.js
│   │       ├── makeCancellable.test.js
│   │       ├── mapAsyncLimit.test.js
│   │       ├── mapLimit.test.js
│   │       ├── measureTime.test.js
│   │       ├── monitorPromise.test.js
│   │       ├── once.test.js
│   │       ├── PriorityMutex.test.js
│   │       ├── PriorityQueueExecutor.test.js
│   │       ├── processLargeArray.test.js
│   │       ├── promiseAll.test.js
│   │       ├── promiseAllSettled.test.js
│   │       ├── promiseAny.test.js
│   │       ├── PromisePool.test.js
│   │       ├── promiseRace.test.js
│   │       ├── promisify.test.js
│   │       ├── raceWithMetadata.test.js
│   │       ├── RateLimiter.test.js
│   │       ├── rejectAfter.test.js
│   │       ├── resolveDependencies.test.js
│   │       ├── retryOnce.test.js
│   │       ├── retryWithBackoff.test.js
│   │       ├── retryWithJitter.test.js
│   │       ├── runAbortableGraph.test.js
│   │       ├── runDependentTasks.test.js
│   │       ├── runParallel.test.js
│   │       ├── runPipeline.test.js
│   │       ├── runSaga.test.js
│   │       ├── runSequential.test.js
│   │       ├── runTaskGraph.test.js
│   │       ├── runWithDependencies.test.js
│   │       ├── Scheduler.test.js
│   │       ├── Semaphore.test.js
│   │       ├── sleep.test.js
│   │       ├── speculativeFetch.test.js
│   │       ├── streamMergeGraph.test.js
│   │       ├── sumFileSizes.test.js
│   │       ├── sumPromises.test.js
│   │       ├── switchMap.test.js
│   │       ├── swrCache.test.js
│   │       ├── taskScheduler.test.js
│   │       ├── TimedMutex.test.js
│   │       ├── timeLimit.test.js
│   │       ├── TimeSlicedScheduler.test.js
│   │       ├── timeToRot.test.js
│   │       ├── transactionalBatchMap.test.js
│   │       ├── transactionalWrite.test.js
│   │       ├── WeightedRateLimiter.test.js
│   │       ├── withCleanup.test.js
│   │       ├── withTimeout.test.js
│   │       ├── withTimeoutPromise.test.js
│   │       ├── WorkerPool.test.js
│   │       └── yieldedCPU.test.js
│   ├── frontend-projects
│   │   ├── simple-zerodha-app
│   │   │   ├── flexbox.html
│   │   │   ├── index.html
│   │   │   ├── landing-photo.svg
│   │   │   ├── logo.svg
│   │   │   └── play-styles.html
│   │   └── vscode-landing-page
│   │       ├── index.html
│   │       ├── logo.png
│   │       └── style.css
│   ├── HTML-CSS-Assignments-main
│   │   ├── A1-IIElevenLabs-Basic
│   │   │   ├── Assignment-1.png
│   │   │   ├── google.png
│   │   │   ├── index.html
│   │   │   ├── README.md
│   │   │   └── style.css
│   │   ├── A2-ElevenLabs-ContactSales
│   │   │   ├── Assignment-2.png
│   │   │   └── README.md
│   │   ├── A3-100xDevs-landing-Page
│   │   │   ├── Assignment-3.png
│   │   │   └── README.md
│   │   ├── assignment-1
│   │   │   ├── index.html
│   │   │   ├── problems
│   │   │   │   ├── 0-horizontal-align
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   └── README.md
│   │   │   │   ├── 1-vertical-align
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   ├── Pritam-Solution.png
│   │   │   │   │   └── README.md
│   │   │   │   ├── 2-flex-layout
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   ├── README.md
│   │   │   │   │   └── Solution.png
│   │   │   │   ├── 3-grid-layout
│   │   │   │   │   ├── image.png
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   └── README.md
│   │   │   │   ├── 4-more-complicated-grid
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   └── README.md
│   │   │   │   ├── 5-vscode-bottombar
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── photo.png
│   │   │   │   │   └── README.md
│   │   │   │   └── 6-vs-code-landing-page
│   │   │   │       ├── index.css
│   │   │   │       ├── index.html
│   │   │   │       └── README.md
│   │   │   ├── README.md
│   │   │   └── solutions
│   │   │       ├── 0-horizontal-align
│   │   │       │   ├── index.html
│   │   │       │   ├── README.md
│   │   │       │   └── Solution-ss.png
│   │   │       ├── 1-vertical-align
│   │   │       │   ├── index.html
│   │   │       │   ├── Pritam-Sol.png
│   │   │       │   └── README.md
│   │   │       ├── 2-flex-layout
│   │   │       │   ├── index.html
│   │   │       │   ├── README.md
│   │   │       │   └── Solution.png
│   │   │       ├── 3-grid-layout
│   │   │       │   ├── index.html
│   │   │       │   ├── README.md
│   │   │       │   └── Solution.png
│   │   │       ├── 4-complicated-grid
│   │   │       └── vs-code-landing-page
│   │   │           ├── index.css
│   │   │           └── index.html
│   │   ├── assignment-2
│   │   │   ├── easy
│   │   │   │   ├── bg-color-changer
│   │   │   │   │   └── README.md
│   │   │   │   └── quiz-app
│   │   │   │       ├── data.js
│   │   │   │       └── README.md
│   │   │   ├── hard
│   │   │   │   └── taskify
│   │   │   │       └── README.md
│   │   │   ├── medium
│   │   │   │   └── Form-Builder
│   │   │   │       └── README.md
│   │   │   └── README.md
│   │   ├── assignment-3
│   │   │   ├── landing-1
│   │   │   │   └── README.md
│   │   │   ├── landing-2
│   │   │   │   ├── image.png
│   │   │   │   └── README.md
│   │   │   ├── landing-3
│   │   │   │   ├── image.png
│   │   │   │   └── README.md
│   │   │   ├── landing-4
│   │   │   │   ├── image.png
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   ├── dom-manipulation-w4
│   │   │   ├── 01-basics
│   │   │   │   └── README.md
│   │   │   ├── easy
│   │   │   │   ├── flashcard-app
│   │   │   │   │   ├── app.js
│   │   │   │   │   ├── index.html
│   │   │   │   │   ├── README.md
│   │   │   │   │   └── syle.css
│   │   │   │   ├── movie-explorer
│   │   │   │   │   └── README.md
│   │   │   │   └── recipe-finder
│   │   │   │       └── README.md
│   │   │   ├── hard
│   │   │   │   ├── crypto-tracker
│   │   │   │   │   └── README.md
│   │   │   │   ├── habit-tracker
│   │   │   │   │   └── README.md
│   │   │   │   └── resume-builder
│   │   │   │       └── README.md
│   │   │   ├── medium
│   │   │   │   ├── expense-lens
│   │   │   │   │   └── README.md
│   │   │   │   ├── meme-generator
│   │   │   │   │   └── README.md
│   │   │   │   └── weather-switcher
│   │   │   │       └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── JavaScript-Assignments-w02
│   │   ├── 00-basic-js-problems
│   │   │   ├── 1-Fibonacci.js
│   │   │   ├── 2-roundNumToNext5x.js
│   │   │   ├── 3-findLargest3Nums.js
│   │   │   ├── 4-circle-area.js
│   │   │   ├── 40-gen-RandomNos.js
│   │   │   ├── 41-printOdds.js
│   │   │   ├── 42-count-Chars-in-str.js
│   │   │   ├── 43-countWords.js
│   │   │   ├── 44-searchInArr.js
│   │   │   ├── 45-generateEmpID.js
│   │   │   ├── 46-goldenString.js
│   │   │   ├── 47-lastDigit.js
│   │   │   └── README.md
│   │   ├── 01-js-basics
│   │   │   ├── 01-1-sum.js
│   │   │   ├── 01.js
│   │   │   ├── 02.js
│   │   │   ├── 03.js
│   │   │   ├── 04.js
│   │   │   ├── 05.js
│   │   │   └── README.md
│   │   ├── 02-js-built-ins
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── problems
│   │   │   │   ├── easy
│   │   │   │   │   ├── countCharacters.js
│   │   │   │   │   ├── countOccurrences.js
│   │   │   │   │   ├── countVowels.js
│   │   │   │   │   ├── fibonacci.js
│   │   │   │   │   └── reverseString.js
│   │   │   │   ├── hard
│   │   │   │   │   ├── uniqueElements.js
│   │   │   │   │   └── wordCompression.js
│   │   │   │   └── medium
│   │   │   │       ├── findDuplicates.js
│   │   │   │       ├── isPerfectNumber.js
│   │   │   │       ├── non-repeat.js
│   │   │   │       ├── primeupto100.js
│   │   │   │       ├── reverseInteger.js
│   │   │   │       └── stringCompression.js
│   │   │   ├── README.md
│   │   │   └── tests
│   │   │       ├── compressStrings.test.js
│   │   │       ├── compressWords.test.js
│   │   │       ├── countCharacters.test.js
│   │   │       ├── countOccurrences.test.js
│   │   │       ├── countVowels.test.js
│   │   │       ├── fibonacci.test.js
│   │   │       ├── findDuplicates.test.js
│   │   │       ├── nonrepeat.test.js
│   │   │       ├── perfectNumber.test.js
│   │   │       ├── prime.test.js
│   │   │       ├── reverseInteger.test.js
│   │   │       ├── reverseString.test.js
│   │   │       └── uniqueElements.test.js
│   │   ├── 03-js
│   │   │   ├── easy
│   │   │   │   ├── anagram.js
│   │   │   │   ├── expenditure-analysis.js
│   │   │   │   └── find-largest-element.js
│   │   │   ├── hard
│   │   │   │   ├── calculator.js
│   │   │   │   └── todo-list.js
│   │   │   ├── medium
│   │   │   │   ├── count-vowels.js
│   │   │   │   ├── palindrome.js
│   │   │   │   └── times.js
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   └── tests
│   │   │       ├── anagram.test.js
│   │   │       ├── calculator.test.js
│   │   │       ├── count-vowels.test.js
│   │   │       ├── expenditure-analysis.test.js
│   │   │       ├── find-largest-element.test.js
│   │   │       ├── palindrome.test.js
│   │   │       └── todo-list.test.js
│   │   ├── 04-async-js
│   │   │   ├── easy
│   │   │   │   ├── 1-counter.js
│   │   │   │   ├── 2-counter.js
│   │   │   │   ├── 3-read-from-file.js
│   │   │   │   └── 4-write-to-file.js
│   │   │   ├── hard (promises)
│   │   │   │   ├── 1-promisify-setTimeout.js
│   │   │   │   ├── 2-sleep-completely.js
│   │   │   │   ├── 3-promise-all.js
│   │   │   │   └── 4-promise-chain.js
│   │   │   ├── medium
│   │   │   │   ├── 1-file-cleaner.js
│   │   │   │   └── 2-clock.js
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   └── tests
│   │   │       ├── 1-promisify-setTimeout.test.js
│   │   │       ├── 2-sleep-completely.test.js
│   │   │       ├── 3-promise-all.test.js
│   │   │       └── 4-promise-chain.test.js
│   │   ├── hotel-booking-platform
│   │   │   └── README.md
│   │   ├── hotel-contest-test-main
│   │   │   ├── bun.lock
│   │   │   ├── index.test.ts
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   └── vitest.config.ts
│   │   └── README.md
│   ├── learning-codes-notes
│   │   ├── backend
│   │   │   ├── calculator-http-server
│   │   │   │   ├── index.html
│   │   │   │   ├── index.js
│   │   │   │   ├── node_modules
│   │   │   │   │   ├── accepts
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── body-parser
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── read.js
│   │   │   │   │   │   │   ├── types
│   │   │   │   │   │   │   │   ├── json.js
│   │   │   │   │   │   │   │   ├── raw.js
│   │   │   │   │   │   │   │   ├── text.js
│   │   │   │   │   │   │   │   └── urlencoded.js
│   │   │   │   │   │   │   └── utils.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── bytes
│   │   │   │   │   │   ├── History.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── call-bind-apply-helpers
│   │   │   │   │   │   ├── actualApply.d.ts
│   │   │   │   │   │   ├── actualApply.js
│   │   │   │   │   │   ├── applyBind.d.ts
│   │   │   │   │   │   ├── applyBind.js
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── functionApply.d.ts
│   │   │   │   │   │   ├── functionApply.js
│   │   │   │   │   │   ├── functionCall.d.ts
│   │   │   │   │   │   ├── functionCall.js
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── reflectApply.d.ts
│   │   │   │   │   │   ├── reflectApply.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── call-bound
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── content-disposition
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── content-type
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── cookie
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── SECURITY.md
│   │   │   │   │   ├── cookie-signature
│   │   │   │   │   │   ├── History.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── debug
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── src
│   │   │   │   │   │       ├── browser.js
│   │   │   │   │   │       ├── common.js
│   │   │   │   │   │       ├── index.js
│   │   │   │   │   │       └── node.js
│   │   │   │   │   ├── depd
│   │   │   │   │   │   ├── History.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   └── browser
│   │   │   │   │   │   │       └── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── dunder-proto
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── get.d.ts
│   │   │   │   │   │   ├── get.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── set.d.ts
│   │   │   │   │   │   ├── set.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   ├── get.js
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   └── set.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── ee-first
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── encodeurl
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── es-define-property
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── es-errors
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── eval.d.ts
│   │   │   │   │   │   ├── eval.js
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── range.d.ts
│   │   │   │   │   │   ├── range.js
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── ref.d.ts
│   │   │   │   │   │   ├── ref.js
│   │   │   │   │   │   ├── syntax.d.ts
│   │   │   │   │   │   ├── syntax.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   ├── tsconfig.json
│   │   │   │   │   │   ├── type.d.ts
│   │   │   │   │   │   ├── type.js
│   │   │   │   │   │   ├── uri.d.ts
│   │   │   │   │   │   └── uri.js
│   │   │   │   │   ├── es-object-atoms
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── isObject.d.ts
│   │   │   │   │   │   ├── isObject.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── RequireObjectCoercible.d.ts
│   │   │   │   │   │   ├── RequireObjectCoercible.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   ├── ToObject.d.ts
│   │   │   │   │   │   ├── ToObject.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── escape-html
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── etag
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── express
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── application.js
│   │   │   │   │   │   │   ├── express.js
│   │   │   │   │   │   │   ├── request.js
│   │   │   │   │   │   │   ├── response.js
│   │   │   │   │   │   │   ├── utils.js
│   │   │   │   │   │   │   └── view.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── finalhandler
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── forwarded
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── fresh
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── function-bind
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── implementation.js
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── test
│   │   │   │   │   │       └── index.js
│   │   │   │   │   ├── get-intrinsic
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── test
│   │   │   │   │   │       └── GetIntrinsic.js
│   │   │   │   │   ├── get-proto
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── Object.getPrototypeOf.d.ts
│   │   │   │   │   │   ├── Object.getPrototypeOf.js
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── Reflect.getPrototypeOf.d.ts
│   │   │   │   │   │   ├── Reflect.getPrototypeOf.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── gopd
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── gOPD.d.ts
│   │   │   │   │   │   ├── gOPD.js
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── has-symbols
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── shams.d.ts
│   │   │   │   │   │   ├── shams.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   ├── shams
│   │   │   │   │   │   │   │   ├── core-js.js
│   │   │   │   │   │   │   │   └── get-own-property-symbols.js
│   │   │   │   │   │   │   └── tests.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── hasown
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── http-errors
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── iconv-lite
│   │   │   │   │   │   ├── encodings
│   │   │   │   │   │   │   ├── dbcs-codec.js
│   │   │   │   │   │   │   ├── dbcs-data.js
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   ├── internal.js
│   │   │   │   │   │   │   ├── sbcs-codec.js
│   │   │   │   │   │   │   ├── sbcs-data-generated.js
│   │   │   │   │   │   │   ├── sbcs-data.js
│   │   │   │   │   │   │   ├── tables
│   │   │   │   │   │   │   │   ├── big5-added.json
│   │   │   │   │   │   │   │   ├── cp936.json
│   │   │   │   │   │   │   │   ├── cp949.json
│   │   │   │   │   │   │   │   ├── cp950.json
│   │   │   │   │   │   │   │   ├── eucjp.json
│   │   │   │   │   │   │   │   ├── gb18030-ranges.json
│   │   │   │   │   │   │   │   ├── gbk-added.json
│   │   │   │   │   │   │   │   └── shiftjis.json
│   │   │   │   │   │   │   ├── utf16.js
│   │   │   │   │   │   │   ├── utf32.js
│   │   │   │   │   │   │   └── utf7.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── bom-handling.js
│   │   │   │   │   │   │   ├── helpers
│   │   │   │   │   │   │   │   └── merge-exports.js
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   └── streams.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── types
│   │   │   │   │   │       └── encodings.d.ts
│   │   │   │   │   ├── inherits
│   │   │   │   │   │   ├── inherits_browser.js
│   │   │   │   │   │   ├── inherits.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── ipaddr.js
│   │   │   │   │   │   ├── ipaddr.min.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── ipaddr.js
│   │   │   │   │   │   │   └── ipaddr.js.d.ts
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── is-promise
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── index.mjs
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── readme.md
│   │   │   │   │   ├── math-intrinsics
│   │   │   │   │   │   ├── abs.d.ts
│   │   │   │   │   │   ├── abs.js
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── constants
│   │   │   │   │   │   │   ├── maxArrayLength.d.ts
│   │   │   │   │   │   │   ├── maxArrayLength.js
│   │   │   │   │   │   │   ├── maxSafeInteger.d.ts
│   │   │   │   │   │   │   ├── maxSafeInteger.js
│   │   │   │   │   │   │   ├── maxValue.d.ts
│   │   │   │   │   │   │   └── maxValue.js
│   │   │   │   │   │   ├── floor.d.ts
│   │   │   │   │   │   ├── floor.js
│   │   │   │   │   │   ├── isFinite.d.ts
│   │   │   │   │   │   ├── isFinite.js
│   │   │   │   │   │   ├── isInteger.d.ts
│   │   │   │   │   │   ├── isInteger.js
│   │   │   │   │   │   ├── isNaN.d.ts
│   │   │   │   │   │   ├── isNaN.js
│   │   │   │   │   │   ├── isNegativeZero.d.ts
│   │   │   │   │   │   ├── isNegativeZero.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── max.d.ts
│   │   │   │   │   │   ├── max.js
│   │   │   │   │   │   ├── min.d.ts
│   │   │   │   │   │   ├── min.js
│   │   │   │   │   │   ├── mod.d.ts
│   │   │   │   │   │   ├── mod.js
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── pow.d.ts
│   │   │   │   │   │   ├── pow.js
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── round.d.ts
│   │   │   │   │   │   ├── round.js
│   │   │   │   │   │   ├── sign.d.ts
│   │   │   │   │   │   ├── sign.js
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── media-typer
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── merge-descriptors
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── license
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── readme.md
│   │   │   │   │   ├── mime-db
│   │   │   │   │   │   ├── db.json
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── mime-types
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── mimeScore.js
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── ms
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── license.md
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── readme.md
│   │   │   │   │   ├── negotiator
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── charset.js
│   │   │   │   │   │   │   ├── encoding.js
│   │   │   │   │   │   │   ├── language.js
│   │   │   │   │   │   │   └── mediaType.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── object-inspect
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── example
│   │   │   │   │   │   │   ├── all.js
│   │   │   │   │   │   │   ├── circular.js
│   │   │   │   │   │   │   ├── fn.js
│   │   │   │   │   │   │   └── inspect.js
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package-support.json
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── readme.markdown
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   ├── bigint.js
│   │   │   │   │   │   │   ├── browser
│   │   │   │   │   │   │   │   └── dom.js
│   │   │   │   │   │   │   ├── circular.js
│   │   │   │   │   │   │   ├── deep.js
│   │   │   │   │   │   │   ├── element.js
│   │   │   │   │   │   │   ├── err.js
│   │   │   │   │   │   │   ├── fakes.js
│   │   │   │   │   │   │   ├── fn.js
│   │   │   │   │   │   │   ├── global.js
│   │   │   │   │   │   │   ├── has.js
│   │   │   │   │   │   │   ├── holes.js
│   │   │   │   │   │   │   ├── indent-option.js
│   │   │   │   │   │   │   ├── inspect.js
│   │   │   │   │   │   │   ├── lowbyte.js
│   │   │   │   │   │   │   ├── number.js
│   │   │   │   │   │   │   ├── quoteStyle.js
│   │   │   │   │   │   │   ├── toStringTag.js
│   │   │   │   │   │   │   ├── undef.js
│   │   │   │   │   │   │   └── values.js
│   │   │   │   │   │   ├── test-core-js.js
│   │   │   │   │   │   └── util.inspect.js
│   │   │   │   │   ├── on-finished
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── once
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── once.js
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── parseurl
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── path-to-regexp
│   │   │   │   │   │   ├── dist
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   └── index.js.map
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── Readme.md
│   │   │   │   │   ├── proxy-addr
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── qs
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── dist
│   │   │   │   │   │   │   └── qs.js
│   │   │   │   │   │   ├── eslint.config.mjs
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── formats.js
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   ├── parse.js
│   │   │   │   │   │   │   ├── stringify.js
│   │   │   │   │   │   │   └── utils.js
│   │   │   │   │   │   ├── LICENSE.md
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── test
│   │   │   │   │   │       ├── empty-keys-cases.js
│   │   │   │   │   │       ├── parse.js
│   │   │   │   │   │       ├── stringify.js
│   │   │   │   │   │       └── utils.js
│   │   │   │   │   ├── range-parser
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── raw-body
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── router
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── layer.js
│   │   │   │   │   │   │   └── route.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── safer-buffer
│   │   │   │   │   │   ├── dangerous.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── Porting-Buffer.md
│   │   │   │   │   │   ├── Readme.md
│   │   │   │   │   │   ├── safer.js
│   │   │   │   │   │   └── tests.js
│   │   │   │   │   ├── send
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── serve-static
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── setprototypeof
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── test
│   │   │   │   │   │       └── index.js
│   │   │   │   │   ├── side-channel
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── side-channel-list
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── list.d.ts
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── side-channel-map
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── side-channel-weakmap
│   │   │   │   │   │   ├── CHANGELOG.md
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── test
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── tsconfig.json
│   │   │   │   │   ├── statuses
│   │   │   │   │   │   ├── codes.json
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── toidentifier
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── type-is
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── unpipe
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   ├── vary
│   │   │   │   │   │   ├── HISTORY.md
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   └── README.md
│   │   │   │   │   └── wrappy
│   │   │   │   │       ├── LICENSE
│   │   │   │   │       ├── package.json
│   │   │   │   │       ├── README.md
│   │   │   │   │       └── wrappy.js
│   │   │   │   ├── package-lock.json
│   │   │   │   └── package.json
│   │   │   ├── images
│   │   │   │   ├── 3-create-an-http-server.jpeg
│   │   │   │   └── ss-FetchAPI.webp
│   │   │   └── README.md
│   │   └── JavaScript
│   │       ├── a1.txt
│   │       ├── a2.txt
│   │       ├── a3.txt
│   │       ├── a4.txt
│   │       ├── async-await.js
│   │       ├── b.txt
│   │       ├── cleanFilePromise.js
│   │       ├── dom-ac
│   │       │   ├── app.js
│   │       │   ├── assets
│   │       │   │   ├── creation_1.png
│   │       │   │   ├── creation_2.jpeg
│   │       │   │   ├── creation_3.jpeg
│   │       │   │   └── spiderman_img.png
│   │       │   ├── index.html
│   │       │   └── style.css
│   │       ├── Dom-manipulation
│   │       │   ├── index.html
│   │       │   ├── index.js
│   │       │   └── styles.css
│   │       ├── FizzBuzz.js
│   │       ├── index.js
│   │       ├── intro.js
│   │       ├── multipleSetTimeout.js
│   │       ├── readFilePromisified.js
│   │       ├── readWritePromisified.js
│   │       ├── setTimeoutPromisified.js
│   │       └── thread_checker.js
│   ├── nodejs-assignments-w7
│   │   ├── 01-nodejs
│   │   │   ├── authenticationServer.js
│   │   │   ├── files
│   │   │   │   └── a.txt
│   │   │   ├── fileServer.js
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   ├── solutions
│   │   │   │   ├── authenticationServer.solution.js
│   │   │   │   ├── fileServer.solution.js
│   │   │   │   ├── todoServer.solution.file.js
│   │   │   │   └── todoServer.solution.js
│   │   │   ├── tests
│   │   │   │   ├── authenticationServer.test.js
│   │   │   │   ├── fileServer.test.js
│   │   │   │   └── todoServer.test.js
│   │   │   ├── todos.json
│   │   │   └── todoServer.js
│   │   ├── 02-middleware
│   │   │   ├── 01-ratelimitter.js
│   │   │   ├── 01-requestcount.js
│   │   │   ├── 02-authmiddleware.js
│   │   │   ├── 02-logIncomingRequests.js
│   │   │   ├── jest.config.ts
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── solution
│   │   │   │   ├── 01-ratelimitter.js
│   │   │   │   ├── 01-requestcount.js
│   │   │   │   ├── 02-authmiddleware.js
│   │   │   │   └── 02-logIncomingRequest.js
│   │   │   ├── tests
│   │   │   │   ├── 01-ratelimitter.spec.js
│   │   │   │   ├── 01-requestcount.spec.js
│   │   │   │   ├── 02-authmiddleware.spec.js
│   │   │   │   └── 02-logIncomingRequests.spec.js
│   │   │   └── tsconfig.json
│   │   ├── 03-jwt
│   │   │   ├── index.js
│   │   │   ├── package-lock.json
│   │   │   ├── package.json
│   │   │   ├── solution
│   │   │   │   └── index.js
│   │   │   └── tests
│   │   │       └── index.spec.js
│   │   ├── http-server
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   ├── server.js
│   │   │   └── tests
│   │   │       └── server.test.js
│   │   └── README.md
│   └── README.md
├── 100xDSA
│   ├── w01-Basics
│   │   ├── b-print-5-alphabets.py
│   │   ├── c-triangle.py
│   │   ├── d-printZ.py
│   │   ├── e-g-print-tableOfN.py
│   │   ├── f-rectangle.py
│   │   ├── h2-calculator.py
│   │   ├── i-addLastDigit.py
│   │   ├── j-Odd-Even.py
│   │   ├── k-factor.py
│   │   ├── l-multiple.py
│   │   ├── m-pass-fail.py
│   │   ├── n-maxmin.py
│   │   ├── o-maxmin-3nums.py
│   │   ├── p-student-perf-evaluation.py
│   │   ├── q-Find-the-location-point.py
│   │   └── README.md
│   ├── w02-Patterns
│   │   ├── Loops
│   │   │   ├── b-print-n-1.py
│   │   │   ├── k-printNuminRev.py
│   │   │   ├── l-sumOfDigits.py
│   │   │   ├── m-revNum.py
│   │   │   ├── n-palindrome.py
│   │   │   └── README.md
│   │   ├── Patterns
│   │   │   ├── a-2Stars.py
│   │   │   ├── b-mstars.py
│   │   │   ├── c-square.py
│   │   │   ├── d-hollowSq.py
│   │   │   ├── e-hollow-Rectangle.py
│   │   │   ├── floyds-triangle.py
│   │   │   ├── h-numbered-triangle.py
│   │   │   ├── i-binary-pyramid.py
│   │   │   ├── j-vertical-triangle.py
│   │   │   ├── k-hollow-vertical-traingle.py
│   │   │   ├── l-triangle.py
│   │   │   ├── m-hollow-triangle.py
│   │   │   ├── o-diamond.py
│   │   │   ├── p-hollow-diamond.py
│   │   │   ├── q-crown.py
│   │   │   ├── r-butterfly.py
│   │   │   ├── README.md
│   │   │   └── s-inverted-diamond.py
│   │   └── Practice-Contest-01
│   │       ├── a-hello-cf.py
│   │       ├── b-isVowel.py
│   │       ├── c-second-last-digit.py
│   │       ├── d-LeapYear.py
│   │       ├── e-count-good-nums.py
│   │       ├── f-FizzBuzz.py
│   │       ├── g-count-0.py
│   │       ├── h-empty-rectangle.py
│   │       ├── i-shifted-pyramid.py
│   │       ├── j-hourglass.py
│   │       ├── k-arrow.py
│   │       └── README.md
│   ├── w03-Functions
│   │   ├── A_Hello_Functions.py
│   │   ├── B_Print_Factors_I.py
│   │   ├── C_Print_Factors_II.py
│   │   ├── D_Check_Prime.py
│   │   ├── E_Factorial.py
│   │   ├── F_nCr.py
│   │   ├── G_Print_Primes_from_1_to_N.py
│   │   ├── H_Count_Zeros.py
│   │   ├── I_Find_HCF.py
│   │   ├── J_LCM.py
│   │   └── README.md
│   ├── w04-Arrays
│   │   ├── A_Print_Array_In_Reverse.py
│   │   ├── B_Sum_of_Array.py
│   │   ├── C_Minimum_Element_and_Its_Position.py
│   │   ├── Contest-02
│   │   │   ├── A_Result_Day.py
│   │   │   ├── B_Fastest_Runner.py
│   │   │   ├── C_Sort_0_1_2.py
│   │   │   ├── D_Compare_Factorials.py
│   │   │   ├── E_Beautiful_Array.py
│   │   │   ├── F_Special_Factors.py
│   │   │   ├── G_RCB_wins_again.py
│   │   │   ├── H_Almost_Primes.py
│   │   │   ├── I_Unique_Elements.py
│   │   │   ├── README.md
│   │   │   └── Standing.png
│   │   ├── D_Maximum_Element_with_Position.py
│   │   ├── E_Search_Element_in_Array.py
│   │   ├── F_Count_Occurrences.py
│   │   ├── G_Check_If_Array_is_Sorted.py
│   │   ├── H_Sort_01.py
│   │   ├── I_Reverse.py
│   │   ├── input.txt
│   │   ├── J_Arrange_the_Numbers.py
│   │   ├── K_Swap_Alternate.py
│   │   ├── L_Missing_Number.py
│   │   ├── M_Find_Duplicate_Number.py
│   │   ├── N_Intersection_of_Arrays.py
│   │   ├── n.png
│   │   ├── O_Pair_Sum.py
│   │   ├── O.png
│   │   ├── P_Triplets.py
│   │   ├── Q_Count_Quadraplets.py
│   │   └── README.md
│   ├── w05-2d-Arrays
│   │   ├── A_Row_Order.py
│   │   ├── B_Column_Order.py
│   │   ├── C_Find_Maximum.py
│   │   ├── D_Search_in_a_2_D_Matrix.py
│   │   ├── E_Row_Minimum.py
│   │   ├── F_Column_Sum.py
│   │   ├── G_Row_with_max_1_s.py
│   │   ├── H_Wave_I.py
│   │   ├── I_Wave_II.py
│   │   ├── input.txt
│   │   ├── J_Boundary_Traversal.py
│   │   ├── J.png
│   │   └── README.md
│   ├── w05-Strings
│   │   ├── A_Char_to_ASCII.py
│   │   ├── B_ASCII_to_Character.py
│   │   ├── C_Lowercase_Uppercase_Digit_or_Special.py
│   │   ├── D_Convert_to_Lowercase.py
│   │   ├── E_Brothers.py
│   │   ├── F_Lexicographical_Order.py
│   │   ├── G_Replace_Character.py
│   │   ├── H_Remove_Character.py
│   │   ├── I_Trim_Spaces.py
│   │   ├── J_Toggle_Case.py
│   │   ├── K_Strong_Password.py
│   │   ├── L_Reverse.py
│   │   ├── M_Palindrome.py
│   │   ├── N_Count_Words.py
│   │   └── README.md
│   ├── w06-Searching-Sorting
│   │   ├── A_Linear_Search.py
│   │   ├── B_Binary_Search.py
│   │   ├── C_Binary_Search_Strings.py
│   │   ├── D_Selection_Sort_Trace.py
│   │   ├── E_Bubble_Sort_Trace.py
│   │   ├── F_Insertion_Sort_Trace.py
│   │   ├── G_Selection_Sort_v_s_Insertion_Sort.py
│   │   ├── H_Merge_Two_Sorted_Arrays.py
│   │   ├── input.txt
│   │   ├── qs-Seaching-Sorting.pdf
│   │   └── README.md
│   ├── w07-Contest-2
│   │   ├── A_Balanced_String.py
│   │   ├── B_Thala_For_A_Reason.py
│   │   ├── C_Laxmi_Chit_Fund.py
│   │   ├── D_Mogambo_s_Happy_Hour.py
│   │   ├── E_Toggle_Me.py
│   │   ├── F_Sum_Along_and_Beyond_Diagonals.py
│   │   ├── G_Crazy_Rectangle.py
│   │   ├── H_Interleaved_Strings.py
│   │   ├── I_Strong_Password_II.py
│   │   ├── input.txt
│   │   ├── J_Gangster_Ghafoor.py
│   │   └── Qs-Contest.pdf
│   ├── w07-mixed-Problems
│   │   ├── A_Second_Largest_Element.py
│   │   ├── B_Push_Zeros_to_the_End.py
│   │   ├── C_Check_array_rotation.py
│   │   ├── D_Rotate_Array.py
│   │   ├── E_Sum_of_Digits_II.py
│   │   ├── F_String_Compression.py
│   │   ├── G_Longest_Word.py
│   │   ├── H_Diagonal_Sum.py
│   │   ├── I_Rotate_Image.py
│   │   ├── J_Spiral_Matrix.py
│   │   └── Problems.pdf
│   └── w08-complexity
│       ├── A_Natural_Sum.py
│       ├── B_Interval_Sum.py
│       ├── C_Counting_Intervals.py
│       ├── D_Count_Factors.py
│       ├── E_Am_I_Prime.py
│       ├── F_Count_Primes.py
│       ├── G_Print_Factors.py
│       ├── H_Kth_Factor.py
│       ├── Problems.jpeg
│       ├── Problems.pdf
│       └── README.md
├── README.md
└── tree.md

229 directories, 1148 files
```