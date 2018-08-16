<?php

namespace Havenly;

class Mather
{
    protected $value;

    /**
     * @param int $startingValue
     */

    public function __construct(int $startingValue) 
    {
        $this->value = $startingValue;
    }

    /**
     * @return int
     */
    public function getCurrentValue()
    {
        return $this->value;
    }

    /**
     * @param int $value
     */
    public function setValue(int $value)
    {
        $this->value = $value;
    }

    /**
     * @param int $exponent
     */
    public function setCurrentValueToPowerOf(int $exponent)
    {
       $this->value = $this->value ** $exponent;
    }

    /**
     * @return array
     */
    public function splitCurrentValueIntoArray(int $valueToPower = null)
    {
        if($valueToPower == null) {
            $valueToPower = $this->value;
        }
        $ints = str_split($valueToPower);
        return $ints;
    }

    /**
     * @param array $ints
     * @return int
     */
    public function sumOfArray(array $ints)
    {
        $total = 0;
        foreach ($ints as $number) {
            $total += $number;
            echo $total;
        };
        return $total;
    }
}


// used video series from this website to get an understanding of php: https://laracasts.com/skills/php 