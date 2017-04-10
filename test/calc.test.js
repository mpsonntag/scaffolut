/*
 * Unit tests for src/calc.js
 */

import { describe, it } from "mocha"
import { assert } from "chai"

import { sumReturn } from "../src/calc.js"

describe("Testing simple function", () => {
    it("test simple math", () => {
        assert.isOk(2 === sumReturn(1,1), "This should always pass")
        assert.isNotOk(2 === sumReturn(1,2), "This should always fail")
    })
})

