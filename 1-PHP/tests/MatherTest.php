<?php

namespace Havenly\Test;

use PHPUnit\Framework\TestCase;
use Havenly\Mather;

require( __DIR__ . '/../src/Mather.php');

class MatherTest extends TestCase
{
    public function testSettingInitialValueReturnsCorrectValue()
    {
        $mather = new Mather(2);

        $this->assertEquals(2, $mather->getCurrentValue());
    }

    public function testGetAndSetValueReturnsCorrectValue()
    {
        $mather = new Mather(10);

        $mather->setValue(3);

        $this->assertEquals(3, $mather->getCurrentValue());
    }

    public function testGetPowerSetsNewPower()
    {
        $mather = new Mather(10);

        $mather->setCurrentValueToPowerOf(2);
        $newValue = $mather->getCurrentValue();

        $this->assertEquals(100, $newValue);
    }

    public function testSplitCurrentValueIntoArray()
    {
        $mather = new Mather(10);

        $expectedArr = [1, 0];

        $resultArr = $mather->splitCurrentValueIntoArray();

        $this->assertEquals($expectedArr, $resultArr);
    }

    public function testArraySum()
    {
        $mather = new Mather(10);

        $arrToSum = [1, 2, 3, 4];
        $expectedSum = 10;

        $resultSum = $mather->sumOfArray($arrToSum);

        $this->assertEquals($expectedSum, $resultSum);
    }

    public function testArraySumOfSplit()
    {
        $expectedResult = 26;
        $basePower = 2;
        $exponent = 15;

        $mather = new Mather($basePower);

        $mather->setCurrentValueToPowerOf($exponent);

        $result = $mather->sumOfArray(
            $mather->splitCurrentValueIntoArray()
        );

        $this->assertEquals($expectedResult, $result);
    }
}
