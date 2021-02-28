<?php
namespace Interview;

set_exception_handler(function (\Exception $ex) : void {
    echo 'Error' . PHP_EOL;
});

class CustomException extends \Exception
{
}

echo main() . PHP_EOL;

function main() : int
{
    try {
        throw new CustomException;
        echo 'OK' . PHP_EOL;
        return 0;
    } catch (\Exception $ex) {
        echo '\Exception' . PHP_EOL;
        return 1;
    } catch (CustomException $ex) {
        echo 'CustomException' . PHP_EOL;
        return 2;
    } finally {
        echo 'Finally' . PHP_EOL;
    }
    return 4;
}
